import { createContext, useContext } from "react";

const MenuContext = createContext();

const initialState= {
    coffee: [
        {name: 'Espresso', shortInfo: 'A rich and intense coffee shot, brewed to perfection for a bold flavor.', url: './Images/coffee1.jpg', price: '3.50'},
        {name: 'Americano', shortInfo: 'Smooth and balanced, a shot of espresso with hot water for a lighter taste.', url: './Images/coffee2.jpg', price: '4.00'},
        {name: 'Cappuccino', shortInfo: 'A classic blend of espresso, steamed milk, and velvety foam for a creamy texture.', url: './Images/coffee3.jpg', price: '5.00'},
        {name: 'Latte', shortInfo: 'A smooth and milky coffee with a mild espresso base, perfect for a gentle coffee experience.', url: './Images/coffee4.jpg', price: '5.50'},
        {name: 'Flat White', shortInfo: 'A strong espresso-based drink with silky microfoam for a smooth finish.', url: './Images/coffee5.jpg', price: '5.50'},
        {name: 'Mocha', shortInfo: 'A delicious mix of espresso, steamed milk, and chocolate syrup, topped with whipped cream.', url: './Images/coffee6.jpg', price: '6.00'},
        {name: 'Caramel Macchiato', shortInfo: 'A layered espresso drink with vanilla syrup, steamed milk, and a drizzle of caramel.', url: './Images/coffee7.jpg', price: '6.50'},
        {name: 'Affogato', shortInfo: 'A delightful dessert-style coffee with a shot of hot espresso poured over vanilla ice cream.', url: './Images/coffee8.jpg', price: '6.50'},
    ],
    tea: [
        {name: 'English Breakfast Tea', shortInfo: 'A full-bodied black tea with a rich, malty taste, perfect for any time of the day.', url: './Images/tea1.jpg', price: '4.00'},
        {name: 'Earl Grey', shortInfo: 'A fragrant black tea infused with bergamot, offering a citrusy and floral aroma.', url: './Images/tea2.jpg', price: '4.50'},
        {name: 'Matcha Latte', shortInfo: 'A creamy and earthy blend of Japanese green tea powder and steamed milk.', url: './Images/tea3.jpg', price: '6.00'},
        {name: 'Chai Latte', shortInfo: 'A spiced black tea with milk, infused with cinnamon, cardamom, and cloves.', url: './Images/tea4.jpg', price: '5.50'},
        {name: 'Hot Chocolate', shortInfo: 'A rich and creamy chocolate drink, topped with whipped cream and marshmallows.', url: './Images/tea5.jpg', price: '5.00'},
        {name: 'Iced Latte', shortInfo: 'A refreshing cold version of a classic latte, made with espresso, milk, and ice.', url: './Images/tea6.jpg', price: '5.50'},
        {name: 'Lemon Ginger Tea', shortInfo: 'A soothing blend of fresh lemon and ginger, perfect for relaxation and warmth.', url: './Images/tea7.jpg', price: '4.50'},
        {name: 'Berry Smoothie', shortInfo: 'A refreshing mix of seasonal berries, yogurt, and honey for a natural energy boost.', url: './Images/tea8.jpg', price: '7.00'},
    ],
    pastries: [
        {name: 'Butter Croissant', shortInfo: 'A light, flaky, and buttery French pastry, perfect for a morning treat.', url: './Images/pastries1.jpg', price: '4.00'},
        {name: 'Pain au Chocolat', shortInfo: 'A delicate, layered pastry filled with rich, melted chocolate.', url: './Images/pastries2.jpg', price: '4.50'},
        {name: 'Cinnamon Roll', shortInfo: 'A soft, sweet pastry rolled with cinnamon sugar and topped with icing.', url: './Images/pastries3.jpg', price: '5.00'},
        {name: 'Almond Croissant', shortInfo: 'A golden, flaky croissant filled with almond cream and dusted with powdered sugar.', url: './Images/pastries4.jpg', price: '5.50'},
        {name: 'Muffin (Blueberry / Chocolate)', shortInfo: 'A moist and fluffy muffin with fresh blueberries or rich chocolate chips.', url: './Images/pastries5.jpg', price: '4.50'},
        {name: 'Cheesecake', shortInfo: 'A creamy and smooth dessert with a crunchy biscuit base, available in classic or berry flavors.', url: './Images/pastries6.jpg', price: '6.50'},
        {name: 'Tiramisu', shortInfo: 'A decadent Italian dessert with layers of coffee-soaked sponge cake and mascarpone cream.', url: './Images/pastries7.jpg', price: '7.00'},
        {name: 'Apple Pie', shortInfo: 'A traditional homemade pie filled with spiced apples and baked in a golden crust.', url: './Images/pastries8.jpg', price: '6.00'},
    ],
    snacks: [
        {name: 'Avocado Toast', shortInfo: 'Toasted artisan bread topped with mashed avocado, poached egg, and a sprinkle of chili flakes.', url: 'a', price: '9.00'},
        {name: 'French Toast', shortInfo: 'Golden-brown brioche dipped in cinnamon egg batter, served with maple syrup.', url: 'a', price: '10.00'},
        {name: 'Oatmeal Bowl', shortInfo: 'A warm bowl of creamy oatmeal topped with fresh berries, nuts, and honey.', url: 'a', price: '8.50'},
        {name: 'Granola Yogurt', shortInfo: 'A refreshing mix of Greek yogurt, crunchy granola, and seasonal fruits.', url: 'a', price: '8.00'},
        {name: 'Smoked Salmon Bagel', shortInfo: 'A toasted bagel with cream cheese, smoked salmon, capers, and fresh dill.', url: 'a', price: '12.00'},
        {name: 'Scrambled Eggs & Toast', shortInfo: 'Fluffy scrambled eggs served with toasted sourdough and butter.', url: 'a', price: '9.50'},
        {name: 'Caprese Salad', shortInfo: 'A fresh and vibrant salad with tomatoes, mozzarella, basil, and balsamic glaze.', url: 'a', price: '10.00'},
        {name: 'Quiche Lorraine', shortInfo: 'A savory French tart with a creamy egg custard, crispy bacon, and melted cheese.', url: 'a', price: '11.00'},
    ],
};

export function MenuProvider({children}) { 
    return(<MenuContext.Provider value={initialState}>{children}</MenuContext.Provider>)
}

export function useMenu() {
    const context = useContext(MenuContext);
    if(context === undefined) throw new Error('Menu was used outside the MenuProvider!');
    return context;
}
