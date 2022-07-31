// Script pour récupérer les champions depuis l'api champions.json
$(document).ready(function() {	   
    var index = 0;
    var tags = [];
    var tagList = ["instantané", "silence", "désarme", "immobilise"];
    var regexList = ["/instantané|instantanés|instantanée|instantanées/gi", "/silence/gi", "/désarme|désarmés|désarmé|désarmes/gi", "/immobilise|immobilisé|immobilises|immobilisés/gi"];
    var tagDisplay = "";
    var textSpellOne = "";
    var textSpellTwo = "";
    $.getJSON('https://terrerunique.github.io/files/data/champions.json', function(champion) {
        $.each(champion, function(i, champ) {
            tags = [];
            textSpellOne = champ.descsort1;
            textSpellTwo = champ.descsort2;
            tagDisplay = "";
            // Oula c'est moche :d Va falloir refactor ça
            textSpellOne = textSpellOne.replace(/Instantané|instantanés|instantanée|instantanées/gi, function (x) {
                if(!tags.includes("instantané")) {
                    tags.push("instantané");
                }
                return '<em class="tag">' + x + '</em>';
            });
            textSpellOne = textSpellOne.replace(/silence/gi, function (x) {
                if(!tags.includes("silence")) {
                    tags.push("silence");
                }
                return '<em class="tag">' + x + '</em>';
            });
            textSpellOne = textSpellOne.replace(/désarme|désarmés|désarmé|désarmes/gi, function (x) {
                if(!tags.includes("désarme")) {
                    tags.push("désarme");
                }
                return '<em class="tag">' + x + '</em>';
            });
            textSpellOne = textSpellOne.replace(/immobilise|immobilisé|immobilises|immobilisés/gi, function (x) {
                if(!tags.includes("immobilise")) {
                    tags.push("immobilise");
                }
                return '<em class="tag">' + x + '</em>';
            });
            textSpellTwo = textSpellTwo.replace(/Instantané|instantanés|instantanée|instantanées/gi, function (x) {
                if(!tags.includes("instantané")) {
                    tags.push("instantané");
                }
                return '<em class="tag">' + x + '</em>';
            });
            textSpellTwo = textSpellTwo.replace(/silence/gi, function (x) {
                if(!tags.includes("silence")) {
                    tags.push("silence");
                }
                return '<em class="tag">' + x + '</em>';
            });
            textSpellTwo = textSpellTwo.replace(/désarme|désarmés|désarmé|désarmes/gi, function (x) {
                if(!tags.includes("désarme")) {
                    tags.push("désarme");
                }
                return '<em class="tag">' + x + '</em>';
            });
            textSpellTwo = textSpellTwo.replace(/immobilise|immobilisé|immobilises|immobilisés/gi, function (x) {
                if(!tags.includes("immobilise")) {
                    tags.push("immobilise");
                }
                return '<em class="tag">' + x + '</em>';
            });

            tagDisplay = tags.join(" ");
            $('#champion-list').append(
                '<div id="champion-' + index + '" class="champion type-' + champ.type + ' ' + tagDisplay + '">' + 
                    '<div class="champion-header">'+
                        '<img src="' + champ.iconechamp + '" alt="Icone de ' + champ.nomchamp + '" class="champion-icone">'+
                        '<h2 class="champion-name champ-search">' + champ.nomchamp + '&nbsp;'+
                            '<img class="type-img" src="../files/images/' + champ.type + '.png" height="24" title="Dégâts ' + champ.type + '"></h2>'+
                    '</div>'+
                    '<div class="champion-content">'+
                        '<div class="champion-spell">'+
                            '<div class="champion-spell-header">'+
                                '<img src="' + champ.iconesort1 + '" alt="Icone du sort ' + champ.nomsort1 + '" class="champion-spell-icone">'+
                                '<h3 class="champion-spell-nom">' + champ.nomsort1 + '</h3>'+
                            '</div>'+
                            '<p class="champion-spell-desc">' + textSpellOne + '</p>'+
                        '</div>'+
                        '<div class="champion-spell">'+
                            '<div class="champion-spell-header">'+
                                '<img src="' + champ.iconesort2 + '" alt="Icone du sort ' + champ.nomsort2 + '" class="champion-spell-icone">'+
                                '<h3 class="champion-spell-nom">' + champ.nomsort2 + '</h3>'+
                            '</div>'+
                            '<p class="champion-spell-desc">' + textSpellTwo + '</p>'+
                        '</div>'+
                    '</div>'+
                '</div>');
            index++;
        });
    });
});