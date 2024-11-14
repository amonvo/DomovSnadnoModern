/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it

// gatsby-browser.js

export const onClientEntry = () => {
    // Přidání externího CSS souboru do hlavičky
    const link = document.createElement("link");
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  };
  
