// ecosystem.config.js
module.exports = {
    apps: [
        {
            name: 'barbieri-backend',      // Nom du processus
            script: 'npm',
            args: 'run start',             // Commande à exécuter
            cwd: '/var/www/api.barbieri-economie.com/barbieri-backend', // Répertoire du projet
            env: {
                NODE_ENV: 'production',
            },
        },
    ],
};
