const storeItems = [
    {
        name: 'TV',
        price: 800.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Phone',
        price: 700.00,
        inStock: false,
        details: '5G'
    },
    {
        name: 'Game Console',
        price: 300.00,
        inStock: true,
        details: 'The latest and greatest'
    },
    {
        name: 'Laptop',
        price: 1200.00,
        inStock: true,
        details: '16GB RAM 1TB SSD'
    },
    {
        name: 'Smart Watch',
        price: 200.00,
        inStock: false,
        details: 'Counts your steps'
    },
    {
        name: 'Headphones',
        price: 100.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Keyboard',
        price: 100.00,
        inStock: true,
        details: 'Types for you'
    },
    {
        name: 'HDMI Cord',
        price: 100.00,
        inStock: true,
        details: 'HDMI to USB type C'
    },
    {
        name: 'Monitor',
        price: 300.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Speaker',
        price: 200.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Video Game',
        price: 60.00,
        inStock: true,
        details: 'Enjoy for hours'
    },
];

// Dynamically add new products. This way we don't have to worry about updating HTML by hand when products are added/updated.
$.each(storeItems, function (index, item) {
    if (item.inStock) {
        // Create a new flex row for each in-stock item
        let $row = $('<div>').addClass('flex-row');

        // Add the price to the row
        let $price = $('<span>').addClass('item-price').text('$' + item.price.toFixed(2));
        $row.append($price);

        // Add the name to the row
        let $name = $('<span>').addClass('item-name').text( item.name);
        $row.append($name);

        // Add the details to the flex row
        let $details = $('<span>').addClass('item-details').text(item.details);
        $row.append($details);

        // Append the flex row to a container element
        $('.container').append($row);
    }
});

// Adding functionality to button
let button = document.getElementById('toggle-mode');
// Adding dark-mode class to wrapper div
button.addEventListener('click', function () {
    $('#mode-wrapper').toggleClass('dark-mode');
});