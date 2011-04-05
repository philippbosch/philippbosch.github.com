(function() {
    $('p:contains(Mixins)').next('ul.simple').find('li a.reference.internal').each(function(i, el) {
        var $link = $(this),
            refID = $link.attr('href').substr(1),
            $ref = $('[id="' + refID + '"]'),
            $refdd = $ref.next('dd'),
            $dd = $link.closest('dd'),
            $elements = $refdd.find('dt, dd').clone();
            
        if ($elements.length) {
            $('<p style="background-color: #f6f3a6;"><strong>Inherited from <tt>' + $link.text() + '</tt>:</strong></p>').appendTo($dd);
            $elements.appendTo($dd);
        }
    });
})();