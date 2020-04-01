$(document).ready(function() {
  $(".count").each(function () {
    let marketing = $(this).closest(".wrapper").find(".marketing");
    if ($(this).text() == "0,5"){
      marketing.text("10 порций мышь в подарок");
    }else if ($(this).text() == "2") {
      marketing.text("40 порций 2 мыши в подарок");
    }else if ($(this).text() == "5") {
      marketing.text("100 порций 5 мышей в подарок\r\nзаказчик доволен");
    }
  });

  function selected(shape) {
    let wrapper = $(shape).closest(".wrapper");
    let switcher = wrapper.find(".switch");
    let textLink = wrapper.find(".text-link");
    let firm = wrapper.find(".firm");
    let border = wrapper.find(".border");
    let weight = wrapper.find(".weight");
    let taste = wrapper.find(".taste");
    if (switcher.is(":checked")){
      weight.css("background-color", "#1698D9");
      border.css("background-color", "#1698D9");
      textLink.text("");
      textLink.append("Чего сидишь? Порадуй котэ, <span>купи</span>.");
      firm.text("Сказочное заморское яство");
      firm.css("color", "#666666");
      switcher.prop('checked', false);
    }else {
      weight.css("background-color", "#D91667");
      border.css("background-color", "#D91667");
      if(taste.text() == "с фуа-гра"){
        textLink.text("Печень утки разварная с артишоками.");
      }else if (taste.text() == "с рыбой") {
        textLink.text("Головы щучьи с чесноком да свежайшая сёмгушка.");
      }else if (taste.text() == "с курой") {
        textLink.text("Филе из цыплят с трюфелями в бульоне.");
      }
      switcher.prop('checked', true);
    }
  }

  $(".item").on("click", function () {
    selected(this);
  });

  $(".text-link").on("click", function () {
    selected(this);
  });

  $(".item").hover(
    function () {
      if ($(this).closest(".wrapper").find(".switch").is(":checked")){
        $(this).closest(".wrapper").find(".firm").text("Котэ не одобряет?");
        $(this).closest(".wrapper").find(".firm").css("color", "#E52E7A");
        $(this).closest(".wrapper").find(".weight").css("background-color", "#E52E7A");
        $(this).closest(".wrapper").find(".border").css("background-color", "#E52E7A");
      }
    },function() {
        if ($(this).closest(".wrapper").find(".switch").is(":checked")){
          $(this).closest(".wrapper").find(".firm").text("Сказочное заморское яство");
          $(this).closest(".wrapper").find(".firm").css("color", "#666666");
          $(this).closest(".wrapper").find(".weight").css("background-color", "#D91667");
          $(this).closest(".wrapper").find(".border").css("background-color", "#D91667");
        }
      }
  );
})
