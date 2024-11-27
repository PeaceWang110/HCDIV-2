<script>
    function toggleTheme() {
        const body = document.body;
        if (body.style.background === "white") {
            body.style.background = "linear-gradient(to bottom right, #8B0000, #4B0082, #00008B)";
            body.style.color = "#ADD8E6";
        } else {
            body.style.background = "white";
            body.style.color = "black";
        }
    }

    function reloadIframe() {
        const iframe = document.getElementById('presentation');
        iframe.src = iframe.src;
    }
</script>
