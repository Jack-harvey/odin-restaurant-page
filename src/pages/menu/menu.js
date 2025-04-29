import { clearContent } from "../shared/shared";

export function navEventListener() {
  window.addEventListener("load", () => {
    const navBar = document.querySelector("#menu");

    navBar.addEventListener("click", (event) => {
      console.log(event);
    });
  });
}

const content = document.querySelector("#content");

function createContentOnPage() {}

function createCard() {}

class menuItem {
  static toggleSoldOut() {
    this.soldOut = !this.soldOut;
  }

  constructor(name, price, mealTiming, soldOut = true, description, dietaryFlag) {
    this.name = name;
    this.dietaryFlag = dietaryFlag;
    this.price = price;
    this.mealTiming = mealTiming;
    this.soldOut = soldOut;
    this.description = description;
    this.id = crypto.randomUUID();
  }
}

function createArrayOfMenuItems() {
  const ArrayOfMenuItems = [];

  return ArrayOfMenuItems.push(
    new menuItem(
      "Strawberry Jam Chicken Sandwich",
      8,
      "morning",
      false,
      "Grilled chicken breast with fresh lettuce, creamy mayo, and a sweet strawberry jam spread on toasted multigrain bread, perfect for a bright morning start.",
      "NF"
    ),
    new menuItem(
      "Blueberry Chicken Salad",
      10,
      "noon",
      false,
      "Tender chicken chunks mixed with spring greens, feta, and a blueberry vinaigrette dressing, offering a unique twist to your lunchtime salad cravings.",
      "GF"
    ),
    new menuItem(
      "Spicy Raspberry Chicken Sandwich",
      9,
      "night",
      true,
      "A fiery blend of grilled chicken, jalapeños, arugula, and raspberry jam on a ciabatta roll for a bold dinner flavor adventure.",
      "LF"
    ),
    new menuItem(
      "Apricot Chicken Salad Bowl",
      11,
      "noon",
      false,
      "Roasted chicken served over quinoa and kale, topped with dried apricots and a sweet apricot jam vinaigrette for a refreshing midday meal.",
      "GF"
    ),
    new menuItem(
      "Peach Jam Chicken Sandwich",
      8,
      "morning",
      false,
      "Sliced grilled chicken, cheddar cheese, and sweet peach jam on a croissant make this a fruity, flavorful breakfast option.",
      "NF"
    ),
    new menuItem(
      "Cherry Balsamic Chicken Salad",
      12,
      "noon",
      false,
      "Mixed greens, grilled chicken, goat cheese, almonds, and cherry jam infused balsamic dressing combine in this tangy, savory salad creation.",
      "LF"
    ),
    new menuItem(
      "Fig Jam Chicken Sandwich",
      10,
      "night",
      false,
      "Savory grilled chicken, arugula, brie, and fig jam on sourdough bread, ideal for a rich, gourmet evening meal.",
      "NF"
    ),
    new menuItem(
      "Orange Marmalade Chicken Salad",
      10,
      "morning",
      false,
      "Light chicken salad with celery and almonds, tossed with an orange marmalade dressing, served on butter lettuce for a citrusy breakfast.",
      "GF"
    ),
    new menuItem(
      "Cranberry Jam Chicken Sandwich",
      9,
      "noon",
      false,
      "Pulled chicken, Swiss cheese, spinach, and tart cranberry jam on a toasted baguette make this sandwich a lunchtime favorite.",
      "NF"
    ),
    new menuItem(
      "Blackberry Chicken Salad Wrap",
      10,
      "night",
      true,
      "Diced chicken breast wrapped with romaine, walnuts, and blackberry jam dressing in a spinach tortilla, delivering a sweet, earthy taste for dinner.",
      "LF"
    ),
    new menuItem(
      "Pineapple Jam Chicken Sandwich",
      9,
      "morning",
      false,
      "Sweet pineapple jam layered with grilled chicken, pepper jack cheese, and avocado for a tropical breakfast sandwich experience.",
      "NF"
    ),
    new menuItem(
      "Mango Chicken Salad",
      11,
      "noon",
      false,
      "Juicy mango chunks tossed with chicken, greens, red onion, and a mango jam vinaigrette make this salad a sunshine-in-a-bowl kind of lunch.",
      "GF"
    ),
    new menuItem(
      "Lemon Jam Chicken Sandwich",
      8,
      "morning",
      false,
      "Zesty lemon jam, grilled chicken, spinach, and cream cheese layered on a sesame bagel for a sharp and creamy breakfast combo.",
      "NF"
    ),
    new menuItem(
      "Raspberry Dijon Chicken Salad",
      10,
      "noon",
      false,
      "Grilled chicken and arugula tossed with raspberry jam and Dijon mustard vinaigrette, giving your midday salad a balanced sweet and spicy flavor.",
      "GF"
    ),
    new menuItem(
      "Grape Jam Chicken Sandwich",
      9,
      "night",
      false,
      "Juicy grilled chicken, grape jam, sharp white cheddar, and romaine on wheat bread for a comfort-style evening sandwich.",
      "LF"
    ),
    new menuItem(
      "Plum Chicken Salad",
      11,
      "noon",
      false,
      "Chicken, plum jam, cucumbers, and mixed greens tossed with a light honey vinaigrette for a rich but balanced lunchtime choice.",
      "GF"
    ),
    new menuItem(
      "Apple Jam Chicken Sandwich",
      9,
      "morning",
      false,
      "Grilled chicken and cheddar paired with spiced apple jam on cinnamon raisin bread make this a bold breakfast bite.",
      "NF"
    ),
    new menuItem(
      "Mixed Berry Chicken Salad",
      10,
      "noon",
      false,
      "A medley of berries, grilled chicken, walnuts, goat cheese, and a berry jam vinaigrette for a refreshing, antioxidant-packed lunch salad.",
      "LF"
    ),
    new menuItem(
      "Vanilla Fig Chicken Sandwich",
      10,
      "night",
      true,
      "Chicken breast, vanilla fig jam, spinach, and ricotta on ciabatta bring a sweet-savory harmony perfect for evening cravings.",
      "NF"
    ),
    new menuItem(
      "Pear Jam Chicken Salad",
      10,
      "noon",
      false,
      "Chicken breast cubes, gorgonzola crumbles, and fresh pear jam dressing mixed with romaine and radicchio for a light yet flavorful salad.",
      "GF"
    ),
    new menuItem(
      "Guava Jam Chicken Sandwich",
      9,
      "morning",
      false,
      "Smoky chicken, guava jam, and melted jack cheese on a brioche bun deliver a Caribbean-inspired breakfast experience.",
      "LF"
    ),
    new menuItem(
      "Chili Strawberry Chicken Salad",
      10,
      "noon",
      false,
      "Spicy chili strawberry jam dressing coats grilled chicken, cucumbers, and cabbage in this daring and refreshing lunch salad.",
      "GF"
    ),
    new menuItem(
      "Coconut Jam Chicken Sandwich",
      9,
      "night",
      false,
      "Coconut jam with grilled chicken, pineapple, and lettuce on a toasted bun makes this a sweet and tropical dinner choice.",
      "LF"
    ),
    new menuItem(
      "Honeyberry Chicken Salad",
      11,
      "noon",
      false,
      "Honeyberry jam dressing over sliced chicken, arugula, almonds, and blueberries creates a tangy and satisfying midday meal.",
      "GF"
    ),
    new menuItem(
      "Kiwi Jam Chicken Sandwich",
      9,
      "morning",
      false,
      "Tangy kiwi jam with chicken, bacon, and spinach on wheat bread is a refreshing and protein-rich start to the day.",
      "NF"
    ),
    new menuItem(
      "Raspberry Mint Chicken Salad",
      10,
      "noon",
      false,
      "Refreshing raspberry jam blended with mint, over grilled chicken and baby greens, offers a crisp and herbaceous lunch.",
      "GF"
    ),
    new menuItem(
      "Strawberry Basil Chicken Sandwich",
      9,
      "night",
      false,
      "Strawberry jam with fresh basil, mozzarella, and grilled chicken on sourdough makes this a fragrant, juicy evening option.",
      "LF"
    ),
    new menuItem(
      "Orange Cranberry Chicken Salad",
      10,
      "noon",
      false,
      "Roasted chicken, orange segments, dried cranberries, and a zesty jam dressing over spinach for a citrus-forward lunch salad.",
      "GF"
    ),
    new menuItem(
      "Spicy Peach Chicken Sandwich",
      9,
      "night",
      false,
      "Peach jam spiced with chili, layered with grilled chicken, pepper jack, and red onion on a jalapeño bun.",
      "LF"
    ),
    new menuItem(
      "Cherry Jalapeño Chicken Salad",
      11,
      "noon",
      false,
      "Grilled chicken and jalapeño cherry jam vinaigrette tossed with kale, roasted corn, and feta for a bold, sweet-spicy lunch.",
      "NF"
    ),
    new menuItem(
      "Bourbon Fig Chicken Sandwich",
      11,
      "night",
      true,
      "Savory bourbon fig jam paired with roasted chicken and arugula on grilled rye for a gourmet evening indulgence.",
      "LF"
    ),
    new menuItem(
      "Citrus Berry Chicken Salad",
      10,
      "noon",
      false,
      "Orange, lemon, and berry jam vinaigrette over romaine and grilled chicken for a zesty, fruit-forward lunch option.",
      "GF"
    ),
    new menuItem(
      "Blackcurrant Chicken Sandwich",
      10,
      "night",
      false,
      "Rich blackcurrant jam, grilled chicken, and Brie cheese on a French baguette for a savory, elegant dinner sandwich.",
      "NF"
    ),
    new menuItem(
      "Mango Mint Chicken Salad",
      10,
      "noon",
      false,
      "Chicken breast, mango jam, mint, cucumber, and greens tossed in lime vinaigrette offer a cool and bright midday option.",
      "GF"
    ),
    new menuItem(
      "Spiced Apple Chicken Sandwich",
      9,
      "morning",
      false,
      "Spiced apple jam, grilled chicken, cheddar, and baby spinach on a toasted muffin to start the day with warmth and flavor.",
      "NF"
    ),
    new menuItem(
      "Ginger Peach Chicken Salad",
      11,
      "noon",
      false,
      "Fresh greens, grilled chicken, and ginger peach jam dressing come together in a warming, tangy lunch creation.",
      "GF"
    ),
    new menuItem(
      "Clementine Jam Chicken Sandwich",
      9,
      "morning",
      false,
      "Zesty clementine jam and chicken breast with Swiss cheese and mixed greens on toast for a citrus-infused breakfast option.",
      "NF"
    ),
    new menuItem(
      "Mulberry Chicken Salad",
      10,
      "noon",
      false,
      "Mulberry jam dressing with chicken, spinach, walnuts, and cranberries creates a beautifully balanced, lightly sweet lunch salad.",
      "LF"
    ),
    new menuItem(
      "Raspberry Almond Chicken Sandwich",
      9,
      "night",
      false,
      "Chicken with raspberry jam, almond slivers, and spinach on a ciabatta roll for a sweet and nutty evening sandwich.",
      "GF"
    ),
    new menuItem(
      "Lime Jam Chicken Salad",
      10,
      "noon",
      false,
      "Tangy lime jam vinaigrette on grilled chicken, avocado, black beans, and romaine for a zesty and energizing salad.",
      "GF"
    ),
    new menuItem(
      "Boysenberry Chicken Sandwich",
      9,
      "night",
      false,
      "Grilled chicken, boysenberry jam, and Havarti cheese on a pretzel bun make this rich, sweet sandwich great for dinner.",
      "LF"
    ),
    new menuItem(
      "Tangerine Jam Chicken Salad",
      10,
      "noon",
      false,
      "A refreshing mix of chicken, spinach, goat cheese, and tangerine jam vinaigrette makes this salad a sweet citrus lunch option.",
      "GF"
    ),
    new menuItem(
      "Maple Berry Chicken Sandwich",
      9,
      "morning",
      false,
      "Maple berry jam, grilled chicken, bacon, and Swiss cheese on a toasted bagel for a bold, sweet breakfast sandwich.",
      "NF"
    ),
    new menuItem(
      "Cranberry Jalapeño Chicken Salad",
      11,
      "noon",
      false,
      "Spicy cranberry jalapeño jam over grilled chicken, kale, and quinoa offers a hearty, flavor-packed lunch option.",
      "GF"
    ),
    new menuItem(
      "Fig and Olive Chicken Sandwich",
      10,
      "night",
      false,
      "Earthy fig jam and olive tapenade with chicken and arugula on focaccia make a bold, Mediterranean-inspired dinner item.",
      "LF"
    ),
    new menuItem(
      "Spiced Plum Chicken Salad",
      10,
      "noon",
      false,
      "Spiced plum jam tossed with grilled chicken, cucumber, and spinach offers a deep, warm fruit flavor to your lunch.",
      "GF"
    ),
    new menuItem(
      "Berry Citrus Chicken Sandwich",
      9,
      "morning",
      false,
      "Strawberry and orange jam, grilled chicken, and creamy cheese on brioche for a tangy, satisfying breakfast bite.",
      "NF"
    ),
    new menuItem(
      "Vanilla Cherry Chicken Salad",
      11,
      "noon",
      false,
      "Grilled chicken and vanilla-cherry vinaigrette tossed with spring mix and pecans for a unique, fragrant lunch salad.",
      "LF"
    )
  );
}
