pipeline {
agent any
environment {
    IMAGE_NAME = "blog_nodejs_image"
    CONTAINER_NAME = "blog_nodejs_container"
    PORT = "3000"
}

stages {
    stage('Test Docker') {
        steps {
            sh 'docker --version'
        }
    }

    stage('Checkout') {
        steps {
            git url: 'git@github.com:hoang19020302/blog_nodejs.git',
                branch: 'main',
                credentialsId: '207b8006-773e-418f-a697-0e621b968be2'
        }
    }

    stage('Check folder') {
        steps {
            script {
                sh 'pwd && ls -la'
            }
        }
    }

    stage('Build Docker Image') {
        steps {
            script {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }
    }

    stage('Stop & Remove Old Container') {
        steps {
            script {
                sh 'docker rm -f $CONTAINER_NAME || true'
            }
        }
    }

    stage('Run Container') {
        steps {
            script {
                sh 'docker run -d --name $CONTAINER_NAME -p $PORT:3000 $IMAGE_NAME'
            }
        }
    }
}

post {
    success {
        echo "✅ Deployment successful!"
    }
    failure {
        echo "❌ Deployment failed!"
    }
}
}
