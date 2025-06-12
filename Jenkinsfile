pipeline {
    agent {
        label 'docker-agent'
    }

    environment {
        IMAGE_NAME = "blog_nodejs_image"
        CONTAINER_NAME = "blog_nodejs_container"
        IMAGE_TAG = "${BUILD_NUMBER}"
        PORT = "3000"
    }

    stages {  
        stage('Checkout') {
            steps {
                git url: 'git@github.com:hoang19020302/blog_nodejs.git',
                    branch: 'main',
                    credentialsId: 'git-ssh'
            }
        }

        stage('Build Docker Image') {
            steps {
                 sh 'docker build -t $IMAGE_NAME:$IMAGE_TAG .'
                 sh 'docker tag $IMAGE_NAME:$IMAGE_TAG $IMAGE_NAME:latest'
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
                //sh 'docker run -d --name $CONTAINER_NAME -p $PORT:3000 $IMAGE_NAME:$IMAGE_TAG'
                sh 'docker ps -a'
            }
        }

        stage('Cleanup Dangling Images') {
            steps {
                sh 'docker image prune -f'
            }
        }
        
        stage('Test') {
            steps {
                echo 'Hello from Jenkins agent!'
                sh 'whoami'
                sh 'uname -a'
            }
        }
    }

    post {
        success {
            slackSend (
                channel: '#ci-notifications',
                message: "✅ Build *${env.JOB_NAME}* #${env.BUILD_NUMBER} succeeded",
                color: 'good'
            )
        }
        failure {
            slackSend (
                channel: '#ci-notifications',
                message: "❌ Build *${env.JOB_NAME}* #${env.BUILD_NUMBER} failed",
                color: 'danger'
            )
        }
    }
}
