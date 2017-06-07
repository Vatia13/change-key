$.fn.changeKey = function(options){
    var elem = $(this);
    var option = $.extend({
        loaded: false,
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
    var change = function(input,val){
        var start = input[0].selectionStart;
        var end = input[0].selectionEnd;
        var length = input.val().length;

        var array = input.val().split("");

        if(end > start){
            if((end - start) >= length){
                input.val(val);
                input.focus();
            }else{
                array = $.grep( array, function( n, i ) {
                    return i >= start && i < end;
                }, true );
                array.splice(start,0,""+val+"");
                input.val(array.join(""));
                input[0].selectionStart = start+1;
                input[0].selectionEnd = start+1;
                input[0].focus();
            }
        }else if(end==start){
            array.splice(start,0,""+val+"");
            input.val(array.join(""));
            input[0].selectionStart = start+1;
            input[0].selectionEnd = start+1;
            input[0].focus();
        }else{
            input.val(input.val() + val);
            input.focus();
        }
        return false;
    };

    // On Key press method
    var onPress = function(e){
        e.stopImmediatePropagation();
        var input = $(e.target);
        if(option.lang[e.key] != null){
            change(input,option.lang[e.key]);
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