// Navbar JS
const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navbarLinks = document.getElementsByClassName("navbar-links")[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle("active")
})

// Click Arrows
// $(document).ready(function(){
//     $(".clickable").on("click",function() {
//       val = $(this).data("val");  
//       var div= $("#"+val);
//       div.toggle("slow").siblings().hide("slow");
//   });
// });   

//Example
// $(document).ready(function(){
//     $("button").click(function(){
//       $("p").slideToggle();
//     });
//   });

//Click Arrows

// arrow1
$(document).ready(function(){
    $('#turn6').on('click', function(){
        var angle = ($('#image6').data('angle') + 180 || 0);
        $('#image6').css({'transform': 'rotate(' + angle + 'deg)'});
        $('#image6').data('angle', angle);
        $(".resources").slideToggle();
    });
    // $(".arrow6").click(function(){
    //     $(".resources6").slideToggle();
    // });
});

// $(document).ready(function(){
//     $(".arrow").click(function(){
//         $(".resources").slideToggle();
//     });
// });

$(document).ready(function(){
    $('#turn8').on('click', function(){
        var angle = ($('#image8').data('angle') + 180 || 0);
        $('#image8').css({'transform': 'rotate(' + angle + 'deg)'});
        $('#image8').data('angle', angle);
        $(".resources8").slideToggle();
    });
    // $(".arrow7").click(function(){
    //     $(".resources6").slideToggle();
    // });
});

$(document).ready(function(){
    $('#turn9').on('click', function(){
        var angle = ($('#image9').data('angle') + 180 || 0);
        $('#image9').css({'transform': 'rotate(' + angle + 'deg)'});
        $('#image9').data('angle', angle);
        $(".resources9").slideToggle();
    });
    // $(".arrow7").click(function(){
    //     $(".resources6").slideToggle();
    // });
});

$(document).ready(function(){
    $('#turn10').on('click', function(){
        var angle = ($('#image10').data('angle') + 180 || 0);
        $('#image10').css({'transform': 'rotate(' + angle + 'deg)'});
        $('#image10').data('angle', angle);
        $(".resources10").slideToggle();
    });
    // $(".arrow7").click(function(){
    //     $(".resources6").slideToggle();
    // });
});

$(document).ready(function(){
    $('#turn11').on('click', function(){
        var angle = ($('#image11').data('angle') + 180 || 0);
        $('#image11').css({'transform': 'rotate(' + angle + 'deg)'});
        $('#image11').data('angle', angle);
        $(".resources11").slideToggle();
    });
    // $(".arrow7").click(function(){
    //     $(".resources6").slideToggle();
    // });
});

$(document).ready(function(){
    $('#turn7').on('click', function(){
        var angle = ($('#image7').data('angle') + 180 || 0);
        $('#image7').css({'transform': 'rotate(' + angle + 'deg)'});
        $('#image7').data('angle', angle);
        $(".resources7").slideToggle();
    });
    // $(".arrow7").click(function(){
    //     $(".resources6").slideToggle();
    // });
});

// arrow 2

$(document).ready(function(){
    $('#turn5').on('click', function(){
        var angle = ($('#image5').data('angle') + 180 || 0);
        $('#image5').css({'transform': 'rotate(' + angle + 'deg)'});
        $('#image5').data('angle', angle);
        $(".resources2").slideToggle();
    });
    // $(".arrow6").click(function(){
    //     $(".resources6").slideToggle();
    // });
});

// $(document).ready(function(){
//     $(".arrow2").click(function(){
//         $(".resources2").slideToggle();
//     });
// });

// arrow 3

$(document).ready(function(){
    $('#turn4').on('click', function(){
        var angle = ($('#image4').data('angle') + 180 || 0);
        $('#image4').css({'transform': 'rotate(' + angle + 'deg)'});
        $('#image4').data('angle', angle);
        $(".resources3").slideToggle();
    });
    // $(".arrow6").click(function(){
    //     $(".resources6").slideToggle();
    // });
});

// $(document).ready(function(){
//     $(".arrow3").click(function(){
//         $(".resources3").slideToggle();
//     });
// });

// arrow 4
$(document).ready(function(){
    $('#turn3').on('click', function(){
        var angle = ($('#image3').data('angle') + 180 || 0);
        $('#image3').css({'transform': 'rotate(' + angle + 'deg)'});
        $('#image3').data('angle', angle);
        $(".resources4").slideToggle();
    });
    // $(".arrow6").click(function(){
    //     $(".resources6").slideToggle();
    // });
});

// $(document).ready(function(){
//     $(".arrow4").click(function(){
//         $(".resources4").slideToggle();
//     });
// });

// arrow 5
$(document).ready(function(){
    $('#turn2').on('click', function(){
        var angle = ($('#image2').data('angle') + 180 || 0);
        $('#image2').css({'transform': 'rotate(' + angle + 'deg)'});
        $('#image2').data('angle', angle);
        $(".resources5").slideToggle();
    });
    // $(".arrow6").click(function(){
    //     $(".resources6").slideToggle();
    // });
});

// $(document).ready(function(){
//     $(".arrow5").click(function(){
//         $(".resources5").slideToggle();
//     });
// });

// 
$(document).ready(function(){
    $('#turn').on('click', function(){
        var angle = ($('#image').data('angle') + 180 || 0);
        $('#image').css({'transform': 'rotate(' + angle + 'deg)'});
        $('#image').data('angle', angle);
        $(".resources6").slideToggle();
    });
    // $(".arrow6").click(function(){
    //     $(".resources6").slideToggle();
    // });
});

// 
// $('#turn').on('click', function(){
//     var angle = ($('#image').data('angle') + 180 || 0);
//     $('#image').css({'transform': 'rotate(' + angle + 'deg)'});
//     $('#image').data('angle', angle);
// });