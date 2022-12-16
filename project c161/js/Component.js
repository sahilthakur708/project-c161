AFRAME.registerComponent('throw', {
    init: function () {
        this.createBall()
    },
    createBall: function () {
        window.addEventListener('keydown', (e) => {
            if (e.key === ' ') {
                var ball = document.createElement('a-entity')
                console.log('hello')
                ball.setAttribute('geometry', {
                    primitive: 'sphere',
                    radius: 0.1
                })
                ball.setAttribute('material', 'color', 'black')
                var camera = document.querySelector('#camera')
                var position = camera.getAttribute('position')
                ball.setAttribute('position', {
                    x: position.x,
                    y: position.y,
                    z: position.z
                })
                var cam = document.querySelector('#camera').object3D
                var direction = new THREE.Vector3()
                cam.getWorldDirection(direction)

                ball.setAttribute('velocity', direction.multiplyScalar(-10))

                var scene = document.querySelector('#scene')
                scene.appendChild(ball)

            }
        })
    }
})