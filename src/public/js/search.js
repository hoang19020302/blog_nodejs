// search.js
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('course-input').addEventListener('change', function () {
        var selectBox = document.getElementById('course-input');
        var selectedOption = selectBox.options[selectBox.selectedIndex];
        var form = document.getElementById('course-search-form');
        var action = '/courses' + '/' + selectedOption.value;
        form.setAttribute('action', action);
    });
});
