import pluginCatalogue from '../data/pluginCatalogue.json';

export const packageMap = {
  PVM: {
    name: 'PVM',
    icon: '⚔️',
    label: 'PVM Plugins'
  },
  Plugin: {
    name: 'Plugin',
    icon: '🎁',
    label: 'Plugin Package'
  }
};

export function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function normalizeImageUrl(url) {
  if (!url) {
    return '';
  }

  return String(url);
}

export function getPluginName(plugin) {
  if (typeof plugin === 'string') {
    return plugin;
  }

  if (plugin && typeof plugin === 'object') {
    return plugin.name || plugin.title || plugin.plugin || 'Unknown Plugin';
  }

  return 'Unknown Plugin';
}

export function getPluginIcon(plugin, fallbackIcon) {
  if (plugin && typeof plugin === 'object') {
    return plugin.icon || plugin.emoji || plugin.logo || fallbackIcon;
  }

  return fallbackIcon;
}

export function getPluginImage(plugin) {
  if (plugin && typeof plugin === 'object') {
    return normalizeImageUrl(plugin.image || plugin.imageUrl || '');
  }

  return '';
}

export function getPluginSummary(plugin, name) {
  if (plugin && typeof plugin === 'object') {
    return plugin.summary || plugin.description || `${name} plugin for ElPlugins.`;
  }

  return `${name} plugin for ElPlugins.`;
}

export function hasRealPluginDetails(plugin, name) {
  if (!plugin || typeof plugin !== 'object' || !plugin.details) {
    return false;
  }

  return plugin.details !== `Write your ${name} details here.`;
}

export function getPluginDetails(plugin, name) {
  if (hasRealPluginDetails(plugin, name)) {
    return plugin.details;
  }

  return `Detailed information for ${name} is currently being prepared. Contact Support for setup help, package questions and current support information.`;
}

export function getPluginList() {
  return pluginCatalogue.flatMap((category) => {
    const packageType = category.category === 'PVM' ? 'PVM' : 'Plugin';
    const packageInfo = packageMap[packageType];

    return category.plugins.map((plugin) => {
      const name = getPluginName(plugin);
      const slug = plugin && typeof plugin === 'object'
        ? plugin.slug || slugify(name)
        : slugify(name);

      return {
        name,
        slug,
        icon: getPluginIcon(plugin, category.icon),
        image: getPluginImage(plugin),
        summary: getPluginSummary(plugin, name),
        details: getPluginDetails(plugin, name),
        hasDetails: hasRealPluginDetails(plugin, name),
        category: category.category,
        categoryDescription: category.description,
        packageType,
        packageIcon: packageInfo.icon,
        packageLabel: packageInfo.label
      };
    });
  });
}

export function getSortedPluginList() {
  return getPluginList().sort((a, b) => a.name.localeCompare(b.name));
}

export function getPluginCategories() {
  return pluginCatalogue.map((category) => category.category);
}
