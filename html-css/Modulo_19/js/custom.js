$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
    $(".text-muted").hide();
    $("#btnEnviar").prop("disabled", true);

    $(".nav-modal-open").on("click", function(e) {
        e.preventDefault();

        let page = $(this).attr("rel");
        let dynamicModal = new bootstrap.Modal($("#modelId"));

        $(".modal-body").html($("#" + page).html());
        $(".modal-header h5.modal-title").html($(this).text());
        dynamicModal.show();
    });

    $(".featured-item a").on("click", function(e) {
        e.preventDefault();

        let produto = $(this).parent().find("h4").text();
        window.alert(produto + " esgotado");
    });

    function checkFilling(input){
        if (input.val() == '' || input.val().length < 5) {
            input.parent().find('.text-muted').show();
            input.addClass('invalid');
            input.parent().parent().find("#btnEnviar").prop("disabled", true);
            return false;
        }
        else {
            if(input[0].name == "nome") {
                input.parent().find('.text-muted').hide();
                input.removeClass('invalid');
                input.parent().parent().find("#btnEnviar").prop("disabled", false);
                return true;
            }
            else {
                return specificCheck(input);
            }
        }
    }

    function specificCheck (campo) {
        let emailRE = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$');
        let cepRE = new RegExp('^[0-9]{5}\-[0-9]{3}$');
        let celRE = new RegExp('^[0-9]{5}\-[0-9]{4}$');
        let cpfRE = new RegExp('^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}');
        
        campo.parent().find('.text-muted').show();
        campo.addClass('invalid');
        campo.parent().parent().find("#btnEnviar").prop("disabled", true);

        switch (campo[0].name) {
            case "email":
                if(emailRE.test(campo[0].value)) {
                    campo.parent().find('.text-muted').hide();
                    campo.removeClass('invalid');
                    campo.parent().parent().find("#btnEnviar").prop("disabled", false);
                    return true;
                }
                else {return false;}
                break;
            case "date":
                if(campo[0].value != "") {
                    campo.parent().find('.text-muted').hide();
                    campo.removeClass('invalid');
                    campo.parent().parent().find("#btnEnviar").prop("disabled", false);
                    return true;
                }
                else {return false;}
                break;
            case "cep":
                if(cepRE.test(campo[0].value)) {
                    campo.parent().find('.text-muted').hide();
                    campo.removeClass('invalid');
                    campo.parent().parent().find("#btnEnviar").prop("disabled", false);
                    return true;
                }
                else {return false;}
                break;
            case "phone":
                if(celRE.test(campo[0].value)) {
                    campo.parent().find('.text-muted').hide();
                    campo.removeClass('invalid');
                    campo.parent().parent().find("#btnEnviar").prop("disabled", false);
                    return true;
                }
                else {return false;}
                break;
            case "cpf":
                if(cpfRE.test(campo[0].value)) {
                    campo.parent().find('.text-muted').hide();
                    campo.removeClass('invalid');
                    campo.parent().parent().find("#btnEnviar").prop("disabled", false);
                    return true;
                }
                else {return false;}
                break;
        }
    }

    $('body').on('submit', '.modal-body .form', function(e) {
        e.preventDefault();

        // Verifica se está tudo preenchido antes de enviar
        let allInputs = $(this).find("input");
        let allTests = [];

        allInputs.each(function() {
            allTests.push(checkFilling($(this)));
        })

        if (allTests.every(element => element === true)) {
            window.alert("Cadastro efetuado!");
            $(this)[0].reset();
        }
        else {
            return false;
        }
    })

    $('body').on('blur', '#nome', function() {
        checkFilling($(this));
    })

    $('body').on('blur', '#email', function() {
        checkFilling($(this));
    })

    $('body').on('blur', '#data', function() {
        checkFilling($(this));
    })

    $('body').on('blur', '#cep', function() {
        checkFilling($(this));
    })

    $('body').on('blur', '#phone', function() {
        checkFilling($(this));
    })

    $('body').on('blur', '#cpf', function() {
        checkFilling($(this));
    })

});