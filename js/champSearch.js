// Fonction qui permet de rechercher un champion dans la liste
function champ_search() {
    var text;
    var filter = $('#fieldChamp').val().toUpperCase(); // Recherche par nom
    var filtreType = "type-" + $('.r-type.checked label').text(); // Récupère le filtre par type
    var filtreTag = $('.r-tag.checked label').text().toLowerCase(); // Récupère le filtre par tag en minuscules
    for (var i = 0; i < $('.champion').length; i++) {
        text = "";
        $('#champion-' + i + ' .champ-search').each(function() {
            text+= $(this).text() + " ";
        });
        // Filtre nom
        if (text.toUpperCase().indexOf(filter) > -1) {
            // Filtre Type
            if (filtreType == "type-Tous" || $('#champion-' + i).hasClass(filtreType)) {
                // Filtre Tag
                if (filtreTag == "tous" || $('#champion-' + i).hasClass(filtreTag)) {
                    $('#champion-' + i).show();
                } else {
                    $('#champion-' + i).hide();
                }
            } else {
                $('#champion-' + i).hide();
            }
        } else {
            $('#champion-' + i).hide();
        }
    }
}

// Fonction qui permet de filtrer les champions par type
$(function() {
    $(".r-type").click(function() {
        $(".r-type").removeClass("checked");
        $(this).addClass("checked");
        if ($('.r-type.checked label').text() == "Tous") {
            $('#dropdownType button').text("Dégâts");
        } else {
            $('#dropdownType button').text($(this).text());
        }
        event.stopPropagation(); // Empèche le dropdown de se fermer en cliquant
        champ_search();
    });
});

// Fonction qui permet de filtrer les champions par tag
$(function() {
    $(".r-tag").click(function() {
        $(".r-tag").removeClass("checked");
        $(this).addClass("checked");
        if ($('.r-tag.checked label').text() == "Tous") {
            $('#dropdownTag button').text("Mots-clés");
        } else {
            $('#dropdownTag button').text($(this).text());
        }
        event.stopPropagation(); // Empèche le dropdown de se fermer en cliquant
        champ_search();
    });
});

// Fonction qui gère l'affichage du champ de recherche par nom
$('#fieldChamp').focus(function() {
    $('#fieldChampIcon').addClass('focused');
}).
blur(function() {
    $('#fieldChampIcon').removeClass('focused');
});