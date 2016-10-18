$.fn.changeKey = function(options){
    var elem = $(this);
    var option = $.extend({
        lang: {
            a:'ა',
            A:'ა',
            b:'ბ',
            B:'ბ',
            g:'გ',
            G:'გ',
            d:'დ',
            D:'დ',
            e:'ე',
            E:'ე',
            v:'ვ',
            V:'ვ',
            z:'ზ',
            Z:'ძ',
            t:'ტ',
            T:'თ',
            i:'ი',
            I:'ი',
            k:'კ',
            K:'კ',
            l:'ლ',
            L:'ლ',
            m:'მ',
            M:'მ',
            n:'ნ',
            N:'ნ',
            o:'ო',
            O:'ო',
            p:'პ',
            P:'პ',
            j:'ჯ',
            J:'ჟ',
            R:'ღ',
            r:'რ',
            s:'ს',
            S:'შ',
            u:'უ',
            U:'უ',
            f:'ფ',
            F:'ფ',
            q:'ქ',
            Q:'ქ',
            y:'ყ',
            Y:'ყ',
            C:'ჩ',
            c:'ც',
            w:'წ',
            W:'ჭ',
            x:'ხ',
            X:'ხ',
            h:'ჰ',
            H:'ჰ'
        }
    },options);

    // Transforms Key Word to Value
    var change = function(input,key,val){
        var start = input[0].selectionStart + val.length;
        var sl = input.val().slice(0,input[0].selectionStart);
        var result = sl + key.replace(key,val) + input.val().slice(input[0].selectionStart);
        input.val(result);
        input[0].selectionStart = start;
        input[0].selectionEnd = start;
        input[0].focus();
    };

    // On Key press method
    var onPress = function(e){
        var input = $(this);
        if(option.lang[e.key] != null){
            change(input,e.key,option.lang[e.key]);
            e.preventDefault();
        }
    };

    // Checking if you are using jQuery Chosen Select and adding changeKey on its input
    var checkChosen = function(){
            $.each(elem,function(index){
                if(elem[index].localName == 'select'){
                    setTimeout(function(){
                        var chosenInput = $(elem[index]).next('.chosen-container').find('input');
                        chosenInput.on('keypress',onPress);
                    },100);
                }
            });
    };

    // Calling main input keypress event
    $(this).on('keypress',onPress);

    // Calling Chosen input keypress method
    checkChosen();
};