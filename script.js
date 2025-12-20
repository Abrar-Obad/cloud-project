// وظيفة لإظهار تنبيه عند الضغط على الزر
document.getElementById('btn-alert').addEventListener('click', function() {
    alert('الحوسبة السحابية توفر المرونة، تقليل التكاليف، والوصول العالمي للبيانات!');
});

// وظيفة لتغيير لون الكارد عند الضغط عليه
function changeColor(element) {
    element.style.borderColor = "#007bff";
    element.style.borderWidth = "2px";
    element.style.borderStyle = "solid";
}