var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SDZ2021_1 = new ol.format.GeoJSON();
var features_SDZ2021_1 = format_SDZ2021_1.readFeatures(json_SDZ2021_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SDZ2021_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SDZ2021_1.addFeatures(features_SDZ2021_1);
var lyr_SDZ2021_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SDZ2021_1, 
                style: style_SDZ2021_1,
                popuplayertitle: "SDZ2021",
                interactive: true,
                title: '<img src="styles/legend/SDZ2021_1.png" /> SDZ2021'
            });
var format_DZ2021_2 = new ol.format.GeoJSON();
var features_DZ2021_2 = format_DZ2021_2.readFeatures(json_DZ2021_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DZ2021_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DZ2021_2.addFeatures(features_DZ2021_2);
var lyr_DZ2021_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DZ2021_2, 
                style: style_DZ2021_2,
                popuplayertitle: "DZ2021",
                interactive: true,
                title: '<img src="styles/legend/DZ2021_2.png" /> DZ2021'
            });
var format_ControlledPostPrimarySchools_3 = new ol.format.GeoJSON();
var features_ControlledPostPrimarySchools_3 = format_ControlledPostPrimarySchools_3.readFeatures(json_ControlledPostPrimarySchools_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ControlledPostPrimarySchools_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ControlledPostPrimarySchools_3.addFeatures(features_ControlledPostPrimarySchools_3);
var lyr_ControlledPostPrimarySchools_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ControlledPostPrimarySchools_3, 
                style: style_ControlledPostPrimarySchools_3,
                popuplayertitle: "Controlled Post-Primary Schools",
                interactive: true,
                title: '<img src="styles/legend/ControlledPostPrimarySchools_3.png" /> Controlled Post-Primary Schools'
            });
var format_ControlledPrimarySchools_4 = new ol.format.GeoJSON();
var features_ControlledPrimarySchools_4 = format_ControlledPrimarySchools_4.readFeatures(json_ControlledPrimarySchools_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ControlledPrimarySchools_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ControlledPrimarySchools_4.addFeatures(features_ControlledPrimarySchools_4);
var lyr_ControlledPrimarySchools_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ControlledPrimarySchools_4, 
                style: style_ControlledPrimarySchools_4,
                popuplayertitle: "Controlled Primary Schools",
                interactive: true,
                title: '<img src="styles/legend/ControlledPrimarySchools_4.png" /> Controlled Primary Schools'
            });

lyr_OSMStandard_0.setVisible(true);lyr_SDZ2021_1.setVisible(true);lyr_DZ2021_2.setVisible(true);lyr_ControlledPostPrimarySchools_3.setVisible(true);lyr_ControlledPrimarySchools_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_SDZ2021_1,lyr_DZ2021_2,lyr_ControlledPostPrimarySchools_3,lyr_ControlledPrimarySchools_4];
lyr_SDZ2021_1.set('fieldAliases', {'SDZ2021_cd': 'SDZ2021_cd', 'SDZ2021_nm': 'SDZ2021_nm', 'DEA2014_cd': 'DEA2014_cd', 'DEA2014_nm': 'DEA2014_nm', 'LGD2014_cd': 'LGD2014_cd', 'LGD2014_nm': 'LGD2014_nm', 'Area_ha': 'Area_ha', 'Perim_km': 'Perim_km', });
lyr_DZ2021_2.set('fieldAliases', {'DZ2021_cd': 'DZ2021_cd', 'DZ2021_nm': 'DZ2021_nm', 'SDZ2021_cd': 'SDZ2021_cd', 'SDZ2021_nm': 'SDZ2021_nm', 'DEA2014_cd': 'DEA2014_cd', 'DEA2014_nm': 'DEA2014_nm', 'LGD2014_cd': 'LGD2014_cd', 'LGD2014_nm': 'LGD2014_nm', 'Area_ha': 'Area_ha', 'Perim_km': 'Perim_km', });
lyr_ControlledPostPrimarySchools_3.set('fieldAliases', {'Institution Name': 'Institution Name', 'Address Line 1': 'Address Line 1', 'Address Line 2': 'Address Line 2', 'Address Line 3': 'Address Line 3', 'Town': 'Town', 'County': 'County', 'Postcode': 'Postcode', 'X': 'X', 'Y': 'Y', 'Management': 'Management', 'Type': 'Type', });
lyr_ControlledPrimarySchools_4.set('fieldAliases', {'Institution Name': 'Institution Name', 'Address Line 1': 'Address Line 1', 'Address Line 2': 'Address Line 2', 'Address Line 3': 'Address Line 3', 'Town': 'Town', 'County': 'County', 'Postcode': 'Postcode', 'X': 'X', 'Y': 'Y', 'Management': 'Management', 'Type': 'Type', });
lyr_SDZ2021_1.set('fieldImages', {'SDZ2021_cd': 'TextEdit', 'SDZ2021_nm': 'TextEdit', 'DEA2014_cd': 'TextEdit', 'DEA2014_nm': 'TextEdit', 'LGD2014_cd': 'TextEdit', 'LGD2014_nm': 'TextEdit', 'Area_ha': 'TextEdit', 'Perim_km': 'TextEdit', });
lyr_DZ2021_2.set('fieldImages', {'DZ2021_cd': 'TextEdit', 'DZ2021_nm': 'TextEdit', 'SDZ2021_cd': 'TextEdit', 'SDZ2021_nm': 'TextEdit', 'DEA2014_cd': 'TextEdit', 'DEA2014_nm': 'TextEdit', 'LGD2014_cd': 'TextEdit', 'LGD2014_nm': 'TextEdit', 'Area_ha': 'TextEdit', 'Perim_km': 'TextEdit', });
lyr_ControlledPostPrimarySchools_3.set('fieldImages', {'Institution Name': 'TextEdit', 'Address Line 1': 'TextEdit', 'Address Line 2': 'TextEdit', 'Address Line 3': 'TextEdit', 'Town': 'TextEdit', 'County': 'TextEdit', 'Postcode': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Management': 'TextEdit', 'Type': 'TextEdit', });
lyr_ControlledPrimarySchools_4.set('fieldImages', {'Institution Name': 'TextEdit', 'Address Line 1': 'TextEdit', 'Address Line 2': 'TextEdit', 'Address Line 3': 'TextEdit', 'Town': 'TextEdit', 'County': 'TextEdit', 'Postcode': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Management': 'TextEdit', 'Type': 'TextEdit', });
lyr_SDZ2021_1.set('fieldLabels', {'SDZ2021_cd': 'no label', 'SDZ2021_nm': 'no label', 'DEA2014_cd': 'no label', 'DEA2014_nm': 'no label', 'LGD2014_cd': 'no label', 'LGD2014_nm': 'no label', 'Area_ha': 'no label', 'Perim_km': 'no label', });
lyr_DZ2021_2.set('fieldLabels', {'DZ2021_cd': 'no label', 'DZ2021_nm': 'no label', 'SDZ2021_cd': 'no label', 'SDZ2021_nm': 'no label', 'DEA2014_cd': 'no label', 'DEA2014_nm': 'no label', 'LGD2014_cd': 'no label', 'LGD2014_nm': 'no label', 'Area_ha': 'no label', 'Perim_km': 'no label', });
lyr_ControlledPostPrimarySchools_3.set('fieldLabels', {'Institution Name': 'no label', 'Address Line 1': 'no label', 'Address Line 2': 'no label', 'Address Line 3': 'no label', 'Town': 'no label', 'County': 'no label', 'Postcode': 'no label', 'X': 'no label', 'Y': 'no label', 'Management': 'no label', 'Type': 'no label', });
lyr_ControlledPrimarySchools_4.set('fieldLabels', {'Institution Name': 'no label', 'Address Line 1': 'no label', 'Address Line 2': 'no label', 'Address Line 3': 'no label', 'Town': 'no label', 'County': 'no label', 'Postcode': 'no label', 'X': 'no label', 'Y': 'no label', 'Management': 'no label', 'Type': 'no label', });
lyr_ControlledPrimarySchools_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});