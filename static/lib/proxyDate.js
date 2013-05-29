/* ***** BEGIN LICENSE BLOCK *****
 * Version: MPL 1.1/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is TelaSocial
 *
 * The Initial Developer of the Original Code is Taboca TelaSocial.
 * Portions created by the Initial Developer are Copyright (C) 2010 
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 *      Marcio Galli   <mgalli@taboca.com>
 *      Rafael Sartori <faelsartori@gmail.com>
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either the GNU General Public License Version 2 or later (the "GPL"), or
 * the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 *
 * ***** END LICENSE BLOCK ***** */

function doFilterDraftUTC1123EnglishToBr(data) {
   // This is UTC http://www.csgnetwork.com/timerfc1123calc.html
   // In English 
   var s0 = data.split(' ');
   var sDate = s0[1];
   var sMon = s0[2];
   var sMonList = new Array();
   var sMont = new Array();
   var sYear = s0[3];

   sMonList['Jan']='Jan';
   sMonList['Feb']='Fev';
   sMonList['Mar']='Mar';
   sMonList['Apr']='Abr';
   sMonList['May']='Mai';
   sMonList['Jun']='Jun';
   sMonList['Jul']='Jul';
   sMonList['Aug']='Ago';
   sMonList['Set']='Set';
   sMonList['Oct']='Oct';
   sMonList['Nov']='Nov';
   sMonList['Dec']='Dez';

   sMont['Jan']=0;
   sMont['Feb']=1;
   sMont['Mar']=2;
   sMont['Apr']=3;
   sMont['May']=4;
   sMont['Jun']=5;
   sMont['Jul']=6;
   sMont['Aug']=7;
   sMont['Set']=8;
   sMont['Oct']=9;
   sMont['Nov']=10;
   sMont['Dec']=11;

   var fMes = parseInt(sMont[sMon]);
   var fDia = parseInt(sDate);
   var fAno = parseInt(sYear);

   var result = {'dia':fDia, 'mes':fMes, 'ano':fAno }
   return result; 
}

function doFilter(strDate) { 
   var date = new Date(Date.parse(strDate));
   return date; 
} 

function doHoje()  {
    var mos = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']
    this.data = new Date();
    var hour = this.data.getHours();
    var min = this.data.getMinutes();
    var secs = this.data.getSeconds();
    var prefix = "";
    var prefixmin = "";
    if(secs<=9) { 
    	prefix = "0";
    } 
    if(min<=9) { 
        prefixmin = "0";
    } 
    var ddd = new Date();
    var yy = ddd.getFullYear();
    var dd = ddd.getDate();
    var mm = mos[ddd.getMonth()];
    return dd + ' de ' + mm + ' de ' + yy; 
}

var calendar =  {

	dateControl : function(pubDate) {
		var year, month, day, hour, weekday;
		var phrase;		// this phrase will be the date in a specific format 
		
		// the date format usually changes, so this treats two differente date formats
		weekday = pubDate.slice(0,3);	// example: Wed

		// if the date format is "Wed, 15 Sep 2010 14:00:00 - 0300"
		if(weekday == 'Sun' || weekday == 'Mon' || weekday == 'Tue' || weekday == 'Wed' || weekday == 'Thu' || weekday == 'Fri' || weekday == 'Sat'){
			day = pubDate.slice(5,7);	// example: 22
			month = pubDate.slice(8,11);	// example: Sep
			year = pubDate.slice(12,16);	// example: 2010
			hour = pubDate.slice(17,22);	// example: 10:00:00
		
			// example: transforming month from 'Sep' to '09' 
			if(month == 'Jan')
				month = '01';
			else
			if(month == 'Feb')
				month = '02';
			else
			if(month == 'Mar')
				month = '03';
			else
			if(month == 'Apr')
				month = '04';
			else
			if(month == 'May')
				month = '05';
			else
			if(month == 'Jun')
				month = '06';
			else
			if(month == 'Jul')
				month = '07';
			else
			if(month == 'Aug')
				month = '08';
			else
			if(month == 'Sep')
				month = '09';
			else
			if(month == 'Oct')
				month = '10';
			else
			if(month == 'Nov')
				month = '11';
			else
			if(month == 'Dec')
				month = '12';

			// example: transforming weekday from "Wed" to "Qua"
			if(weekday == 'Sun')
				weekday = 'Dom';
			else
			if(weekday == 'Mon')
				weekday = 'Seg';
			else
			if(weekday == 'Tue')
				weekday = 'Ter';
			else
			if(weekday == 'Wed')
				weekday = 'Qua';
			else
			if(weekday == 'Thu')
				weekday = 'Qui';
			else
			if(weekday == 'Fri')
				weekday = 'Sex';
			else
			if(weekday == 'Sat')
				weekday = 'Sab';
		
			phrase = weekday.concat(", ", day, "/", month, "/", year, " ", hour);
		}
		else
		if(pubDate.length == 10){	// if the date format is "2010-09-10"
			day = pubDate.slice(8,10);
			month = pubDate.slice(5,7);
			year = pubDate.slice(0,4);
		
			phrase = day.concat("/", month, "/", year);
		}
		else	// for other date formats
			phrase = pubDate;


		return phrase;
	}
}

