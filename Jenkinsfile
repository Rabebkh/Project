pipeline {
    agent any
    triggers {
        pollSCM('*/5 * * * *') // Vérifier toutes les 5 minutes
    }
    stages {
        stage('Checkout') {
            steps {
                echo "Récupération du code source"
                checkout scm
            }
        }
        stage('Build') {
            steps {
                echo "Build du projet"
                git url:https://github.com/Rabebkh/Project.git 
            }
        }
        stage('Test') {
            steps {
                echo "Exécution des tests"
                // Ajoutez les commandes de test ici
            }
        }
        stage('Deploy') {
            steps {
                echo "Déploiement du projet"
                // Ajoutez les commandes de déploiement ici
            }
        }
    }
}
