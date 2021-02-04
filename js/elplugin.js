function clickedFreeButton() {
    var freeList = document.getElementById("tm-gallery-page-free");
    var supporterList = document.getElementById("tm-gallery-page-supporter");
    var otherList = document.getElementById("tm-gallery-page-other");
    
    freeList.addClass('hidden');
    supporterList.removeClass('hidden');
    otherList.removeClass('hidden');
  }