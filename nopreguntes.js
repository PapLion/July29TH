let currentPage = 0;
        
        function showPage(pageIndex) {
            const pages = document.querySelectorAll('.container');
            pages.forEach((page, index) => {
                if (index === pageIndex) {
                    page.classList.add('active');
                    page.classList.remove('inactive');
                } else {
                    page.classList.remove('active');
                    page.classList.add('inactive');
                    setTimeout(() => page.style.display = 'none', 500);
                }
            });
            pages[pageIndex].style.display = 'flex';
            setTimeout(() => pages[pageIndex].classList.add('active'), 50); // Delay to trigger opacity transition
        }
        
        function nextPage() {
            const pages = document.querySelectorAll('.container');
            pages[currentPage].classList.remove('active');
            pages[currentPage].classList.add('inactive');
            setTimeout(() => {
                currentPage = (currentPage + 1) % pages.length;
                showPage(currentPage);
            }, 500); // Wait for fade out before showing the next page
        }
        
        document.addEventListener('DOMContentLoaded', () => {
            showPage(currentPage);
            document.body.addEventListener('click', nextPage);
        });