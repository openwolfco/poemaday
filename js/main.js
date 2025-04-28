<script>
    function loadPoem(slug) {
        fetch("js/db.json")
            .then(response => response.json())
            .then(data => {
                const poemData = data.data[slug];
                document.getElementById("title").innerText = poemData.title;
                document.getElementById("author").innerText = "by " + poemData.author;
                document.getElementById("poem").innerHTML = poemData.poem;

                const link = poemData.link || "https://poemaday.openwolf.com";
                document.getElementById("shareFacebook").href = `https://www.facebook.com/sharer/sharer.php?u=${link}`;
                document.getElementById("shareTwitter").href = `https://twitter.com/intent/tweet?url=${link}`;
                document.getElementById("sharePinterest").href = `https://pinterest.com/pin/create/button/?url=${link}`;
                document.getElementById("shareWhatsapp").href = `https://api.whatsapp.com/send?text=${link}`;
                document.getElementById("copyLink").innerText = link;
            })
            .catch(error => {
                // fallback if db.json fails
                console.error('Error loading poems:', error);
                const fallbackLink = "https://poemaday.openwolf.com";
                document.getElementById("shareFacebook").href = `https://www.facebook.com/sharer/sharer.php?u=${fallbackLink}`;
                document.getElementById("shareTwitter").href = `https://twitter.com/intent/tweet?url=${fallbackLink}`;
                document.getElementById("sharePinterest").href = `https://pinterest.com/pin/create/button/?url=${fallbackLink}`;
                document.getElementById("shareWhatsapp").href = `https://api.whatsapp.com/send?text=${fallbackLink}`;
                document.getElementById("copyLink").innerText = fallbackLink;
            });
    }
</script>
