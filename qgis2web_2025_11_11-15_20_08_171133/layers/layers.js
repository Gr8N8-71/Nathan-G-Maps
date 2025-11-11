var wms_layers = [];

var format_EdmontonElectionsMayoralResultsbyWard_0 = new ol.format.GeoJSON();
var features_EdmontonElectionsMayoralResultsbyWard_0 = format_EdmontonElectionsMayoralResultsbyWard_0.readFeatures(json_EdmontonElectionsMayoralResultsbyWard_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EdmontonElectionsMayoralResultsbyWard_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EdmontonElectionsMayoralResultsbyWard_0.addFeatures(features_EdmontonElectionsMayoralResultsbyWard_0);
var lyr_EdmontonElectionsMayoralResultsbyWard_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EdmontonElectionsMayoralResultsbyWard_0, 
                style: style_EdmontonElectionsMayoralResultsbyWard_0,
                popuplayertitle: 'Edmonton Elections - Mayoral Results by Ward',
                interactive: true,
    title: 'Edmonton Elections - Mayoral Results by Ward<br />\
    <img src="styles/legend/EdmontonElectionsMayoralResultsbyWard_0_0.png" /> CARTMELL, Tim_18<br />\
    <img src="styles/legend/EdmontonElectionsMayoralResultsbyWard_0_1.png" /> CARTMELL, Tim_19+<br />\
    <img src="styles/legend/EdmontonElectionsMayoralResultsbyWard_0_2.png" /> CARTMELL, Tim_5<br />\
    <img src="styles/legend/EdmontonElectionsMayoralResultsbyWard_0_3.png" /> KNACK, Andrew_18<br />\
    <img src="styles/legend/EdmontonElectionsMayoralResultsbyWard_0_4.png" /> KNACK, Andrew_19+<br />\
    <img src="styles/legend/EdmontonElectionsMayoralResultsbyWard_0_5.png" /> KNACK, Andrew_5<br />\
    <img src="styles/legend/EdmontonElectionsMayoralResultsbyWard_0_6.png" /> <br />' });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

lyr_EdmontonElectionsMayoralResultsbyWard_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);
var layersList = [lyr_EdmontonElectionsMayoralResultsbyWard_0,lyr_OpenStreetMap_1];
lyr_EdmontonElectionsMayoralResultsbyWard_0.set('fieldAliases', {'name_1': 'name_1', 'name_2': 'name_2', 'effective_': 'effective_', 'effectiv_2': 'effectiv_2', 'councillor': 'councillor', 'councill_2': 'councill_2', 'Binned CSV_Winner': 'Binned CSV_Winner', 'Binned CSV_Margin': 'Binned CSV_Margin', 'Binned CSV_WinnerMargin': 'Binned CSV_WinnerMargin', 'BAKHMUT, Paul': 'BAKHMUT, Paul', 'BILLINGSLEY, JR., Ronald Stewart': 'BILLINGSLEY, JR., Ronald Stewart', 'CARTMELL, Tim': 'CARTMELL, Tim', 'CATERINA, Tony': 'CATERINA, Tony', 'CHUKWUDI, Abdul Malik': 'CHUKWUDI, Abdul Malik', 'DENMAN, Vanessa': 'DENMAN, Vanessa', 'GUDANOWSKI, Andy, Andrzej': 'GUDANOWSKI, Andy, Andrzej', 'JAFFER, Rahim': 'JAFFER, Rahim', 'KNACK, Andrew': 'KNACK, Andrew', 'MOHAMMAD, Omar': 'MOHAMMAD, Omar', 'NADAUK, Utha': 'NADAUK, Utha', 'TUGWELL, Olney': 'TUGWELL, Olney', 'WALTERS, Michael': 'WALTERS, Michael', 'Vote Difference': 'Vote Difference', });
lyr_EdmontonElectionsMayoralResultsbyWard_0.set('fieldImages', {'name_1': 'TextEdit', 'name_2': 'TextEdit', 'effective_': 'TextEdit', 'effectiv_2': 'TextEdit', 'councillor': 'TextEdit', 'councill_2': 'TextEdit', 'Binned CSV_Winner': 'TextEdit', 'Binned CSV_Margin': 'TextEdit', 'Binned CSV_WinnerMargin': 'TextEdit', 'BAKHMUT, Paul': 'TextEdit', 'BILLINGSLEY, JR., Ronald Stewart': 'TextEdit', 'CARTMELL, Tim': 'TextEdit', 'CATERINA, Tony': 'TextEdit', 'CHUKWUDI, Abdul Malik': 'TextEdit', 'DENMAN, Vanessa': 'TextEdit', 'GUDANOWSKI, Andy, Andrzej': 'TextEdit', 'JAFFER, Rahim': 'TextEdit', 'KNACK, Andrew': 'TextEdit', 'MOHAMMAD, Omar': 'TextEdit', 'NADAUK, Utha': 'TextEdit', 'TUGWELL, Olney': 'TextEdit', 'WALTERS, Michael': 'TextEdit', 'Vote Difference': 'TextEdit', });
lyr_EdmontonElectionsMayoralResultsbyWard_0.set('fieldLabels', {'name_1': 'no label', 'name_2': 'hidden field', 'effective_': 'hidden field', 'effectiv_2': 'hidden field', 'councillor': 'hidden field', 'councill_2': 'hidden field', 'Binned CSV_Winner': 'hidden field', 'Binned CSV_Margin': 'hidden field', 'Binned CSV_WinnerMargin': 'hidden field', 'BAKHMUT, Paul': 'inline label - visible with data', 'BILLINGSLEY, JR., Ronald Stewart': 'inline label - visible with data', 'CARTMELL, Tim': 'inline label - visible with data', 'CATERINA, Tony': 'inline label - visible with data', 'CHUKWUDI, Abdul Malik': 'inline label - visible with data', 'DENMAN, Vanessa': 'inline label - visible with data', 'GUDANOWSKI, Andy, Andrzej': 'inline label - visible with data', 'JAFFER, Rahim': 'inline label - visible with data', 'KNACK, Andrew': 'inline label - visible with data', 'MOHAMMAD, Omar': 'inline label - visible with data', 'NADAUK, Utha': 'inline label - visible with data', 'TUGWELL, Olney': 'inline label - visible with data', 'WALTERS, Michael': 'inline label - visible with data', 'Vote Difference': 'inline label - visible with data', });
lyr_EdmontonElectionsMayoralResultsbyWard_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});