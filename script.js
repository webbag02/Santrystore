
const buttons = document.querySelectorAll(".order-btn");
const nomorWA = "6283875872025"; // GANTI NOMOR WA KAMU

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const paket = btn.getAttribute("data-paket");
        const pesan = `Halo kak, saya mau pesan paket ${paket}.`;
        const url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;
        window.open(url, "_blank");
    });
});
