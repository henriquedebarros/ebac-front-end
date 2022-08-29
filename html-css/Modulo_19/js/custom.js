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

    function checkFilling(input){
        if (input.val() == '' || input.val().length < 2) {
            input.parent().find('.text-muted').show();
            input.addClass('invalid');
            input.parent().parent().find("#btnEnviar").prop("disabled", true);
            return false
        }
        else {
            input.parent().find('.text-muted').hide();
            input.removeClass('invalid');
            input.parent().parent().find("#btnEnviar").prop("disabled", false);
        }
    }

    $('body').on('submit', '.modal-body .form', function(e) {
        e.preventDefault();

        // Verifica se está tudo preenchido antes de enviar
        let allInputs = $(this).find("input");
        $.each(allInputs, function(key, value) {
            valor = $(value).val();
            if (value == "") {return false}
        })

        // Expressões regulares para verificar alguns campos
        let inputEmail = $(this).find("#email").val();
        let inputCEP = $(this).find("#cep").val();
        let inputCPF = $(this).find("#cpf").val();
        let emailRE = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$');
        let cepRE = new RegExp('^[0-9]{5}\-[0-9]{3}$');
        let cpfRE = new RegExp('^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}');
                
        if (emailRE.test(inputEmail) && cepRE.test(inputCEP) && cpfRE.test(inputCPF)) {
            window.alert("Cadastro efetuado!")
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