function insertVal(num) {
  document.form.textview.value=document.form.textview.value+num;
}
function equal() {
  document.form.textview.value=eval(document.form.textview.value);
}
function clean(){
  document.form.textview.value='';
}

/*function delete(){

  document.form.textview.value =.substring(0,expr.length-1);
}*/
