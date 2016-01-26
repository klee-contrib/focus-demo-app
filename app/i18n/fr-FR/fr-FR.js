export default {
    button: {
        back: 'Retour',
        watchTrailer: 'Voir la bande annonce'
    },
    live: {
        filter: {
            title: 'Filtres',
            facets: {
                FCT_MOVIE_TITLE: 'Titre',
                FCT_MOVIE_TYPE: 'Type',
                FCT_MOVIE_YEAR: 'Année',
                FCT_PERSON_ACTIVITY: 'Activité',
                FCT_PERSON_NAME: 'Nom',
                FCT_MOVIE_SEX: 'Sexe', // à renommer en FCT_PERSON_SEX sur le backend car concerne les personnes
                FCT_SCOPE: 'Thème',
            }
        }
    },
    movie: {
        action: {
            addphoto: 'Ajouter un poster',
            preview: 'Prévisualiser',
            consult: {
                sheet: 'Consulter la fiche',
                allocine: 'Voir sur allocine'
            },
            create: 'Créer la fiche',
            watchTrailer: 'Voir la bande annonce',
            filter: {
                all: 'Tous',
                actors: 'Acteurs',
                camera: 'Camera man',
                directors: 'Réalisateurs',
                producers: 'Producteurs',
                writers: 'Scénaristes'
            }
        },
        keyConcept: {
            name: 'Film'
        },
        detail: {
            actors: 'Acteurs',
            casting: 'Casting',
            cameramen: 'Camera men',
            caracteristics: 'Caractéristiques',
            directors: 'Réalisateurs',
            overview: 'Résumé',
            posters: 'Affiches',
            producers: 'Producteurs',
            synopsis: 'Synopsis',
            trailer: 'Bande annonce',
            writers: 'Scénaristes'
        },
        unknown: 'Aucune fiche'
    },
    movies: 'Films',
    person: {
        action: {
            addphoto: 'Ajouter une photo',
            preview: 'Prévisualiser',
            consult: {
                sheet: 'Consulter la fiche',
                allocine: 'Voir sur allocine'
            },
            create: 'Créer la fiche'
        },
        keyConcept: {
            name: 'Personne'
        },
        detail: {
            biography: 'Biographie',
            identity: 'Identité',
            movies: 'Filmographie',
            overview: 'Résumé',
            lastmovies: 'Derniers films'
        },
        unknown: 'Aucune  fiche'
    },
    persons: 'Personnes',
    result: {
        for: "résultat pour"
    },
    results: {
        for: "résultats pour"
    },
    search: {
        cartridge: {
            title: 'Vous recherchez ?'
        },
        bar: {
            placeholder: 'Saisissez un nom de film, ou de personne...'
        },
        mostRelevant: 'Les plus pertinents',
        scope: {
            all: 'Tous',
            movie: 'Film',
            person: 'Personne'
        }
    }
};
