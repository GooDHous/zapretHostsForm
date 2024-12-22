var runned = false
var input = document.getElementById("myInput");
var keys = [
  'ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpuMm5yVlFXdFprRDhEclBjN3ZFY0JtQlgzd2RwRmQxUkh3ZDJpTHNZUGRLVkVoQXB5VVRFQVNZZkdKWHc5V2lHVlZWMVZOQTkxcXVRekxncFBRc2s2RzNKTTM3Q0RTQWM=@download.woodyxander.pictures:41454/?outline=1&prefix=%16%03%01%00%C2%A8%01%01#016%20%D0%AD%D1%84%D1%84%D0%B5%D0%BA%D1%82%D0%B8%D0%B2%D0%BD%D1%8B%D0%B9%20%D0%91%D0%B0%D1%82%D0%BB%D0%B5%D1%80',
  'ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpuaUdRa2JMRVdUMkNOdGVhdUNaZVRuVHk3OVRCYU1WTDVhUlRiaEc2Zm9tTjYxSzVYRjNMTW5pN3Rma1c1VnVIR1NkNXFBSlN4TDRTVXhqaFJWOWVKV0dpOFBDRkZqeFI=@download.woodyxander.pictures:41454/?outline=1&prefix=%16%03%01%00%C2%A8%01%01#060%20%D0%9A%D0%BB%D0%B0%D1%81%D1%81%D0%BD%D1%8B%D0%B9%20%D0%94%D1%8E%D0%BD%D0%B0%D0%BD',
  'ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNToyUXRkWmhncFJxVGlwRng4N0dwcG1Wb1RFVVE1YzNCYW5mdHNQSEJ6cDJkOHRBWldkaFpGYVR5aDVvZlViTXVVd1BWWldDYWpWYUR5Ukp4VllMNkxqUDRqV2p3dTFUZmk=@download.woodyxander.pictures:41454/?outline=1&prefix=%16%03%01%00%C2%A8%01%01#085%20%D0%91%D1%8B%D1%81%D1%82%D1%80%D1%8B%D0%B9%20%D0%91%D0%B5%D0%B5%D1%80%D0%BD%D0%B0%D1%80%D1%82',
  'ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo2RHhFZXdhM3VMeUxRWXR6ejJENWNGM2JCTEd0TUd4UWs3ekRVanRKSmptNUd3NEtoaEpCQ044WXBQUEtYUXpHWnlzc3JKcGtnOUNEQ0FkOEVDMmp2VktGb0ZHOGdOckU=@download.woodyxander.pictures:41454/?outline=1&prefix=%16%03%01%00%C2%A8%01%01#121%20%D0%91%D0%BE%D0%B3%D0%B0%D1%82%D1%8B%D0%B9%20%D0%9F%D0%BE%D0%BB%D0%B8%D0%BD%D0%B3',
  'ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp6THRzYlpqUlFnRlNHdHlmM2hRQWlEYXg2VmQ5Vmhib1FyUkM2Mm1aeDN1a2ZQeFI3RFluVnFVZ2VwQ0d4WTVpdnBISGk3SzZwWEtTZ1dMMUE1eDRvYms0d3dvWWR1d3I=@download.woodyxander.pictures:41454/?outline=1&prefix=%16%03%01%00%C2%A8%01%01#066%20%D0%92%D0%BE%D1%81%D1%85%D0%B8%D1%89%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9%20%D0%91%D0%B5%D0%B5%D1%80%D0%BD%D0%B0%D1%80%D1%82',
  'ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpIendyWkpWZnBoVlN3M2FtTk41MW1ZcEUzdU1qOEc3Z0E4S21Ebk5jRFNyYzZaWVF3blJVOTlMWmdOeHFTWnhLaGtEOFN2Z0ZiVldwTlRNdWtOMWRtYzJKZ3F6OGozSkE=@download.woodyxander.pictures:41454/?outline=1&prefix=%16%03%01%00%C2%A8%01%01#111%20%D0%91%D0%B5%D1%80%D0%B5%D0%B6%D0%BB%D0%B8%D0%B2%D1%8B%D0%B9%20%D0%91%D0%B5%D0%B3%D0%B8%D0%BD',
  'ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpUeFc0ZWFMdHlRU0tvc1NDWTR6bmRGZGZxZ2dqTVc4MzdtaWgxRmFacU5QQXBkN3dEYmpVVTNFNVBvaDdVRmRtR2JLUmpieHFXOVgyQnpWTXFKN1FldllmdUx3QW5xU2Y=@download.woodyxander.pictures:41454/?outline=1&prefix=%16%03%01%00%C2%A8%01%01#009%20%D0%9C%D0%B0%D0%BD%D1%8F%D1%89%D0%B8%D0%B9%20%D0%A5%D1%8C%D1%8E%D0%BC',
  'ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo0WXdmY1daYWNNcEpzUDZzcFBLSk5CVVByRXlLVEFkaU5VMm5YWTEzeTlLZHFoWXhVaHBWcVlEOVNYZ1AyZ2loeTdvRUNHNVN2dXpZcFBuS0JhMzdqV2phdXRIbVdhU2Q=@download.woodyxander.pictures:41454/?outline=1&prefix=%16%03%01%00%C2%A8%01%01#006%20%D0%9B%D0%B0%D1%81%D0%BA%D0%BE%D0%B2%D1%8B%D0%B9%20%D0%A1%D0%B0%D0%BD%D1%82%D0%BE%D1%81'

];
  
function give() {
var randkey = keys[Math.floor(Math.random() * keys.length)];
runned = true
document.getElementById('myInput').value = randkey;
}
function copy() {
  if (runned == true) {
    var copyText = document.getElementById("myInput");
    /* Select the text field */
    copyText.select();

    /* Copy the text inside the text field */
    document.execCommand("copy");


    alert("Успешно скопировано: " + copyText.value);
  }
  else alert  ('Пожулайста нажмите Получить ключ');
} 
