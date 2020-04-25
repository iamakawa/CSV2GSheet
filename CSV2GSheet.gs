var ss = SpreadsheetApp.getActiveSpreadsheet();
var REMOTE_SOURCES = [
  {
    'url': 'https://data.gifu-opendata.pref.gifu.lg.jp/dataset/4661bf9d-6f75-43fb-9d59-f02eb84bb6e3/resource/9c35ee55-a140-4cd8-a266-a74edf60aa80/download/210005gifucovid19patients.csv',
    'sheetname': '210005_gifu_covid19_patients',
  },
  {
    'url': 'https://data.gifu-opendata.pref.gifu.lg.jp/dataset/4661bf9d-6f75-43fb-9d59-f02eb84bb6e3/resource/f2468ba2-efe8-483f-9b1b-ee67755dedb0/download/210005gifucovid19testcount.csv',
    'sheetname': '210005_gifu_covid19_test_count',
  },
  {
    'url': 'https://data.gifu-opendata.pref.gifu.lg.jp/dataset/4661bf9d-6f75-43fb-9d59-f02eb84bb6e3/resource/aa3ebb23-5704-470f-a41e-d834d0a51fc0/download/210005gifucovid19callcenter.csv',
    'sheetname': '210005_gifu_covid19_call_center',
  },
  {
    'url': 'https://data.gifu-opendata.pref.gifu.lg.jp/dataset/4661bf9d-6f75-43fb-9d59-f02eb84bb6e3/resource/b71cdec1-b763-4b67-9ff4-24deaea65a55/download/210005gifucovid19advicecenter.csv',
    'sheetname': '210005_gifu_covid19_advice_center'
  }
];
var REMOTE_SOURCES_OPTIONS = {
  method : "get"
};

function CSV2Gsheet(){
  for(var i =0; i<REMOTE_SOURCES.length; i++){    
    response = UrlFetchApp.fetch(REMOTE_SOURCES[i].url, REMOTE_SOURCES_OPTIONS);
    var sheetName = REMOTE_SOURCES[i].sheetname;
    var sh = ss.getSheetByName(sheetName);
    if(sh == null)
    {
      ss.insertSheet(sheetName);
      sh = ss.getSheetByName(sheetName);
    } 
    var data = response.getContentText("Shift_JIS"); 
    var csv = Utilities.parseCsv(data);
    sh.getRange(1,1,csv.length,csv[0].length).setValues(csv);
  }
}