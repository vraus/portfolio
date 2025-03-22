import React from "react";

export default function Elements(){
  return (
    <div className="container">
      {/* Section des Titres */}
      <section>
        <h1 className="text-primary">Titre Principal (h1)</h1>
        <h2 className="text-secondary">Titre Secondaire (h2)</h2>
        <p className="text-muted">Ceci est un paragraphe avec un texte atténué. Il sert à tester la couleur et la taille des textes définis.</p>
      </section>

      {/* Section des Boutons */}
      <section className="my-8">
        <button className="btn btn-primary">Bouton Principal</button>
        <button className="btn btn-secondary">Bouton Secondaire</button>
      </section>

      {/* Section des Cartes */}
      <section className="my-8">
        <div className="grid-cols-responsive">
          <div className="card">
            <h2 className="text-primary">Carte 1</h2>
            <p className="text-muted">Description de la carte 1. Cela permet de tester les ombres et les bords arrondis.</p>
          </div>
          <div className="card">
            <h2 className="text-primary">Carte 2</h2>
            <p className="text-muted">Description de la carte 2. Utilisation des couleurs secondaires et des ombres douces.</p>
          </div>
          <div className="card">
            <h2 className="text-primary">Carte 3</h2>
            <p className="text-muted">Description de la carte 3. L aspect de la carte s ajuste en fonction des styles globaux définis dans le CSS.</p>
          </div>
        </div>
      </section>

      {/* Section de Mise en Page */}
      <section className="my-8">
        <div className="bg-background p-4 shadow-soft">
          <h2 className="text-primary">Mise en page simple avec un fond beige</h2>
          <p className="text-muted">Cette section utilise la couleur de fond définie dans le fichier CSS, ainsi que des ombres douces.</p>
        </div>
      </section>

      {/* Section Responsive */}
      <section className="my-8">
        <div className="grid-cols-responsive">
          <div className="bg-primary p-4 rounded-lg shadow-soft">
            <h2 className="text-background">Élément Responsive 1</h2>
            <p className="text-background">Ce bloc s adapte à la taille de l écran grâce à la grille responsive.</p>
          </div>
          <div className="bg-primary p-4 rounded-lg shadow-soft">
            <h2 className="text-background">Élément Responsive 2</h2>
            <p className="text-background">Un autre élément responsive avec les mêmes styles appliqués.</p>
          </div>
        </div>
      </section>

      {/* Section avec une Ombre Forte */}
      <section className="my-8">
        <div className="bg-secondary p-4 rounded-lg shadow-strong">
          <h2 className="text-primary">Carte avec Ombre Forte</h2>
          <p className="text-muted">Cette carte utilise une ombre plus marquée pour un effet plus dramatique.</p>
        </div>
      </section>
    </div>
  );
};