$(document).ready(function()
{
    $(window).scroll(function()
    {
        if(this.scrollY > 20)
        {
            $('.nav').addClass("sticky");
        }
        else
        {
            $('.nav').removeClass("sticky");
        }
    });
});

function clicar ()
{
    let nav = document.querySelector(".menu")
    let table = document.querySelector("#tabela-escolaridade")

    nav.classList.toggle("active-menu")
    table.classList.toggle("table-hidden")
}