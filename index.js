const offlineConnection = document.querySelector('.offline')
		const onlineConnection = document.querySelector('.online')
		const closeBtn = document.querySelectorAll('.close')
		const refreshBtn = document.querySelector('.refreshBtn')

		function online() {
			offlineConnection.classList.remove('active')
			onlineConnection.classList.add('active')
		}
		function offline() {
			offlineConnection.classList.add('active')
			onlineConnection.classList.remove('active')
		}
		
		window.addEventListener('online',()=>{
			online();
			setTimeout(() => {
				onlineConnection.classList.remove('active')
			}, 5000);
		})
		window.addEventListener('offline',()=>{
			offline();
		})

		for (let i = 0; i < closeBtn.length; i++) {
			closeBtn[i].addEventListener('click',()=>{
				closeBtn[i].parentNode.classList.remove('active');
				if (closeBtn[i].parentNode.classList.contains('offline')) {
					setTimeout(() => {
						closeBtn[i].parentNode.classList.add('active');
					}, 500);
				}
			})
		}

		refreshBtn.addEventListener("click",()=>{
			window.location.reload();
		})