/**
 * Sgript i roi colofn ychwanegol ar lecsicon_cc0.txt yn dangos llythrennau/deugraffau Cymraeg
 * wedi'u hollti yn ddiamwys gyda bwlch. Enghreifftiau isod:
 *
 * 'u n g e ll'
 * 'a ng e l'
 * 'th r i - d i g i d'
 *
 * Script to put an extra column onto lecsicon_cc0.txt which shows Welsh letters/digraphs
 * split unambiguously with a space. Examples above.
 *
 * Defnydd/Usage:
 *
 * $ nodejs addWelshLetters.js
 *
 * Hawlfraint (c) menzy314. Ryddhawyd dan drwydded CC0 1.0 Universal.
 * Copyright (c) menzy314. Released under the CC0 1.0 Universal licence.
 */

function main() {
	var fs = require( 'fs' );

	var inputLines = fs.readFileSync( 'lecsicon_cc0.txt' ).toString().replace( /^\uFEFF/, '' ).split( /\r?\n/ );
	var outputLines = [];
	for ( var i = 0; i < inputLines.length; i++ ) {
		var inputLine = inputLines[ i ];
		if ( inputLine === '' ) {
			continue;
		}
		// inputLine looks like: "poeraf\tpoeri\tVERB\tMood=Ind|Number=Sing|Person=1|Tense=Fut"
		var fields = inputLine.split( '\t' );

		var form = fields[ 0 ];
		// Fix bad form 'liferi ' (with trailing space) in input data
		if ( form === 'liferi ' ) {
			form = 'liferi';
		}
		var lemma = fields[ 1 ];

		if ( !form.match( /^[-'/\\a-zâêîôûŵŷäëïöüẅÿáéíóúẃýàèìòùẁỳA-ZÂÊÎÔÛŴŶÄËÏÖÜẄŸÁÉÍÓÚẂÝÀÈÌÒÙẀỲ]*$/ ) ) {
			throw new Error( 'Rejecting:' + form );
		}
		var letters = getWelshLetters( form, lemma );
		var outputLine = inputLine + '\t' + letters.join( ' ' );
		outputLines.push( outputLine );
	}
	fs.writeFileSync( 'lecsicon_cc0_digraphs.txt', outputLines.join( '\n' ) );
}
/**
 * Split a word into an array of Welsh letters
 *
 * Welsh digraphs are written using two Latin letters, but are considered to be a single letters
 * for many purposes. Ch, dd, ff, ll, ph and th are always digraphs.
 * But ng and rh are usually digraphs, but not always. This function uses a list of exceptions
 * where they are not digraphs.
 *
 * @param {string} form The word to split, e.g. 'ffenestri'
 * @param {string} lemma The root form of the word, e.g. 'ffenestr'
 * @return {string[]} The letters, e.g. [ 'ff', 'e', 'n', 'e', 's', 't', 'r', 'i' ]
 */
function getWelshLetters( form, lemma ) {
	// Lemmas for which rh/ng should be split, either where it's obvious from the word stucture,
	// because it's the name of a foreign place, or according to Geiriadur Prifysgol Cymru.
	//
	// TODO: may need to include some of the following:
	// Angefin Bodringallt Brengain Ingli Langro Llandingad Llanddingad Pinged Tangwen Tangwyn Trerhedyn

	var rhng = [ 'Abergwyngregyn', 'Aberhafesb', 'Aberhigian', 'Aberhonddu', 'Aberhosan', 'Angliad', 'Anglican', 'Anglicanaidd', 'Angola', 'Bangladesh', 'Bangor', 'Bengal', 'Blaengarw', 'Blaengwrach', 'Blaengwynfi', 'Brongest', 'Bronglais', 'Bryngarn', 'Bryngwran', 'Bryngwyn', 'Caerhirfryn', 'Carngowil', 'Carnguwch', 'Carngwcw', 'Cefngorwydd', 'Cilmaengwyn', 'Congo', 'Cryngae', 'Felinganol', 'Ffynnongroyw', 'Garthbrengi', 'Gilfachyrheol', 'Glangors', 'Grongaer', 'Hengastell', 'Hengoed', 'Hengwm', 'Hengwrt', 'Hwngaraidd', 'Hwngareg', 'Hwngari', 'Lingoed', 'Llanengan', 'Llangadfan', 'Llangadog', 'Llangadwaladr', 'Llangaffo', 'Llangamarch', 'Llangammarch', 'Llangan', 'Llanganten', 'Llangar', 'Llangarron', 'Llangasty', 'Llangatwg', 'Llangathen', 'Llangedwyn', 'Llangefni', 'Llangeinwen', 'Llangeinwyr', 'Llangeitho', 'Llangeler', 'Llangelynnin', 'Llangennech', 'Llangenni', 'Llangennith', 'Llangernyw', 'Llangewydd', 'Llangian', 'Llangïan', 'Llangiwa', 'Llangloffan', 'Llanglydwen', 'Llangoed', 'Llangoedmor', 'Llangofen', 'Llangolman', 'Llangollen', 'Llangorwen', 'Llangrallo', 'Llangrannog', 'Llangristiolus', 'Llangrwyne', 'Llangunllo', 'Llangurig', 'Llangwm', 'Llangwnnadl', 'Llangwyfan', 'Llangwyllog', 'Llangwyryfon', 'Llangybi', 'Llangyfelach', 'Llangyfiw', 'Llangyndeyrn', 'Llangynfelyn', 'Llangynhafal', 'Llangynidr', 'Llangynin', 'Llangynllo', 'Llangynnwr', 'Llangynog', 'Llangynwyd', 'Llangynydd', 'Llangynyw', 'Llangystennin', 'Llangywer', 'Llanfairpwllgwyngyll', 'Llwyngroes', 'Llwyngwair', 'Llwyngwern', 'Maengwyn', 'Melingriffith', 'Mongolia', 'Myngul', 'Pengelli', 'Penglais', 'Pengorffwysfa', 'Pengrynwr', 'Pengwern', 'Penybenglog', 'Penyrheol', 'Penyrheolgerrig', 'Penyrherber', 'Singrug', 'Sirhywi', 'Tafarngelyn', 'Tanganyika', 'Tongwynlais', 'Tringarth', 'Ynysymaengwyn', 'arholi', 'bingo', 'byrhau', 'cwango', 'dengar', 'dyfrhau', 'genglo', 'glingam', 'gorhoffi', 'gwarhau', 'hwyrhau', 'ingot', 'jingo', 'jyngl', 'lingri', 'llengar', 'llengig', 'llwfrhau', 'manglo', 'mango', 'mawrhau', 'mingam', 'parhad', 'parhau', 'pengoch', 'rhangor', 'sarhad', 'sarhau', 'sbangl', 'sicrhau', 'siwrhau', 'tango', 'ungell', 'ungnwd', 'ungorn' ];
	if ( !form.match( /^[-'/\\a-zâêîôûŵŷäëïöüẅÿáéíóúẃýàèìòùẁỳA-ZÂÊÎÔÛŴŶÄËÏÖÜẄŸÁÉÍÓÚẂÝÀÈÌÒÙẀỲ]*$/ ) ) {
		throw new Error( 'bad character: ' + form );
	}
	var letters;
	if ( rhng.indexOf( lemma ) > -1 ) {
		letters = form.match( /ch|dd|ff|ll|ph|th|./gi );
	} else {
		letters = form.match( /ch|dd|ff|ng|ll|ph|rh|th|./gi );
	}
	return letters;
}

main();
