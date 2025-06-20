function beforeSubmit() {
    let outputdate = document.querySelector(".outputdate");
    let inputdate = document.querySelector(".inputdate");
    console.log("Input Date:", inputdate.value);  
    let formatteddate = new Date(inputdate.value).toLocaleDateString("en-IN");
   outputdate.value = formatteddate;
    console.log("Formatted Date:", outputdate.value);
}