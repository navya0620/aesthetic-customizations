// Fill the PASTE values after creating Firebase + Cloudinary (see steps).
export const CONFIG = {
  firebase: { apiKey: "AIzaSyAzWCIWw1moiZYykxn8l6lFlwTE6c6ez6Q", authDomain: "aesthetic-customizations.firebaseapp.com", projectId: "aesthetic-customizations", appId: "1:570713138133:web:d80ec41b2b84960676d35c" },
  cloudinary: { cloudName: "zjvitmng", uploadPreset: "resin_upload" },
  whatsapp: "917382049051", // 91 = India code
  instagram: "https://instagram.com/aesthetic_customizations",
  youtube: "https://youtube.com/@AestheticCustomizations",
  categories: ["Keychains","Pendant Chains","Earrings","Bracelets","Coasters (4 inch)","Frames","Accessories","Customized Gifts"]
};
export const configured = !CONFIG.firebase.apiKey.startsWith("PASTE");
export const wa = t => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(t)}`;
export const optimize = (u, w = 700) => u ? u.replace("/upload/", `/upload/f_auto,q_auto,w_${w}/`) : "";
export const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
export const FB = "https://www.gstatic.com/firebasejs/10.12.2/";
