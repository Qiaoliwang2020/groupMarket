$(document).ready(function(){
    listLoading();
    $('.tab .tab-item').on('click',function (){
        renderStoreList();
    })
    $('.float-btn').on('click',function (){
        bottomSheetToggle();
    })
    const card_open = document.getElementById('card_open')
    const card_close = document.getElementById('card_close')
    const card_panel = document.getElementById('card_panel')

    function modalState() {
        if(card_panel.classList.contains('hidden')) {
            // Show modal
            card_panel.classList.remove('hidden')
            card_panel.classList.add('block')

            // Delete button
            card_open.classList.add('hidden')
            card_open.classList.remove('block')

            // Start animation open
            card_panel.classList.add('card_open')
        } else {
            // Delete modal
            card_panel.classList.add('hidden')
            card_panel.classList.remove('block')

            // Show button
            card_open.classList.remove('hidden')
            card_open.classList.add('block')

            // Remove animation open
            card_panel.classList.remove('card_open')
        }
    }

    card_open.addEventListener('click', modalState)
    card_close.addEventListener('click', modalState)
})
renderStoreList = () =>{
    $('.store-list').empty();
    let list = `<div class="divide-y divide-gray-100 mt-5 md:mr-4">
                <div class="max-w-2xl mx-auto bg-white rounded-row-item shadow-md overflow-hidden md:max-w-xs ">
                    <div class="flex md:block">
                        <div class="flex-shrink-0">
                            <img class="h-36 w-36  object-cover md:w-full" src="https://images.unsplash.com/photo-1506374322094-6021fc3926f1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3lkbmV5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="Man looking at item at a store">
                        </div>
                        <div class="p-4">
                            <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Big Mouth Burgers</a>
                            <p class="mt-2 text-gray-500">American food</p>
                            <p class="mt-2 text-gray-500">1.6</p>
                        </div>
                    </div>
                </div>
            </div>`
    $('.store-list').append(list);
}
listLoading = ()=>{
    $('.store-list').empty();
    let listLoading = `<div class="border border-gray-300 shadow rounded-row-item p-4 max-w-sm w-full mx-auto">
                <div class="animate-pulse flex space-x-4">
                    <div class="bg-gray-400 h-12 w-12"></div>
                    <div class="flex-1 space-y-4 py-1">
                        <div class="h-4 bg-gray-400 rounded w-3/4"></div>
                        <div class="space-y-2">
                            <div class="h-4 bg-gray-400 rounded"></div>
                            <div class="h-4 bg-gray-400 rounded w-5/6"></div>
                        </div>
                    </div>
                </div>
            </div>`;
    $('.store-list').append(listLoading);
}

bottomSheetToggle = ()=>{

}