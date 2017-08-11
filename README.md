# BMH Demo

Hey Evan,

Thanks for giving me the opportunity to demo my work.
If you have any questions or would like to run through this with
me don't hesitate to reach out.

## Requirements

Demonstrate proficiency with the following technologies:
- [ ] Angular 2
- [ ] Redux

Non-technical requirements include:
- [ ] Demonstrate ability to handle large scale reactivity

Bonus requirements:
- [ ] Run on Ionic
- [ ] Pull data using GraphQL using Redux Sagas
- [ ] Demonstrate natural animations

## Overview

Given that the functionality options were wide open, I thought it best
to approach something relevant to Blue Mesa.

### User Journey: Alice

My name is Alice and I've recently installed GoodFoodBadFood to help keep my diet in line with my health goals.

I use GoodFoodBadFood at the grocery store to:
- [ ] tell me whether food I'm browsing fits within my health goals;

I accomplish this by:
- [ ] tapping "Groceries" to navigate from the "Review" page to the item search page;
- [ ] scanning the bar code of food I'm looking at and receiving a simple good food or bad food rating, with a reason why;
- [ ] if the item doesn't have a bar code, I use a search to find the item I'm looking at;

I use GoodFoodBadFood at a restaurant to:
- [ ] tell me whether a meal option I'm looking at fits my health goals;

I accomplish this by:
- [ ] tapping "Meals" to navigate from the "Review" page to the meal search page;
- [ ] typing in the meal name to search for it, or something close to it;

I use GoodFoodBadFood at home or on my down time to:
- [ ] review my diet to identify items I should substitute, knowing that purchasing the right things alone doesn't mean I've kept to the diet I need;

I accomplish this by:
- [ ] opening GoodFoodBadFood; the review page is right on the home screen so I always get reminders about how I'm doing.

I am reminded to use GoodFoodBadFood when I'm at home because it:
- [ ] sends a weekly SMS, Push notification, or Email with a review of my diet accomplishments; the communication method is my choice.

I am reminded to use GoodFoodBadFood when I'm at the grocery store because it:
- [ ] checks my location to see when I'm somewhere that I may be purchasing food;

## Technical Challenges

Wherever appropriate we'll use third party sources to accomplish our technical challenges:

- [ ] Access to a database of products with nutritional data **(NutritionIX)**
- [ ] Ability to scan products **(NutritionIX)**
- [ ] Access to a database of meals **(NutritionIX)**
- [ ] Access to location while running in the background and determine nearby businesses **(Google Places API)**
- [ ] Store food data for reference **(ApolloData)**
- [ ] Automated message sending with:
  - [ ] SMS **(Twilio)**
  - [ ] Push notifications **(OneSignal)**
  - [ ] Email **(Customer.io)**
- [ ] Receive push notifications **(Ionic)**

Although some of these we can approach ourselves, these providers will reduce the development overhead and risk.

## Page Structure

#### Home Page

The home page should contain two links, "Meals" and "Groceries" that link out to the Meal Search and Product (Grocery) Search pages respectively.
- [ ] "Meals" link
- [ ] "Groceries" link

When the user has not added any groceries yet, the interface should use demo data to show the user what it'll look like when they invest the time to add items.
- [ ] Demo review data
- [ ] Load demo when no data is available

Above the review information a week control should allow the user to navigate to past weeks. The user needs to be able to quickly get back to the current week.
- [ ] Week navigation control
- [ ] "Current Week" button

The review information needs to show:
- a letter rating, similar to the school system; and,
- a message describing the meaning of the letter, encouraging or congratulating them depending on the score


- [ ] Use the GPA system to match letters to our number evaluation
- [ ] Build severity levels, ensure this matches the results our algorithm outputs

If the user has a score less than A+, a list of items they added within that time period should show below the rating with a message "What would your score be without..." and checkboxes to allow them to toggle off and on to see the adjusted score.

- [ ] List of items with checkboxes
- [ ] Checkboxes toggle a "preview" score

In order to gain more value from the list, the user should be able to:
- [ ] Sort by various health criteria
- [ ] Split into various food types
- [ ] "Check all" option for each section

##### Components

```
> Page
  > WeekNavigation
  > Section
    > Header, Message
  > ListControls
  > ProductList
    > CheckboxProductListItem (variation of ProductListItem)
  > Button, Button
```

#### Product (Grocery) Search Page

The product page should show the barcode scanner on open along with a search box.

- [ ] Barcode scanner
- [ ] Search box

Scanning a product should evaluate the product nutrition based on the user's nutritional settings to determine where on the scale of acceptability the product stands.

- [ ] Product evaluation

The product name and picture, if available, should be shown along with either:
- Message stating that the food is acceptable
- Message that the food is not acceptable, or needs to be moderated, with the culprit nutritional fact shown with a description.


- [ ] Evaluation results display

Below this information, there should be two buttons that allow the user to either "Add Item" or "Put Back".

"Put Back" should clear the search and show the barcode scanner and search bar again.

Adding the item should store the item in the database for reference in the review screen.

- [ ] "Add Item"
- [ ] "Put Back"

If, upon scanning, the item is not found, the user should be prompted to search. The barcode scanner should be hidden when this happens and the search bar should come into focus.

- [ ] Search transition and prompt

##### Components

```
> Page
  > BarcodeScanner
  > SearchBar
  > ProductList
    > ProductListItem

> (modal) ProductResult
  > Header, Image, Paragraph, Button
```

#### Meal Search Page

Meal search page should mirror the product search base with the barcode scanner portion removed.

##### Components

```
> Page
  > SearchBar
  > ProductList
    > ProductListItem

> (modal) ProductResult
```

#### Settings Page

Three checkboxes to toggle communication methods:
- [ ] SMS
- [ ] Push notification
- [ ] Email

"Nutritional Restrictions" section with, what would be, a series of checkboxes. The only checkbox listed will be "Diabetes prevention". This demonstrates the potential to use additional algorithms to identify problematic foods.

##### Components

```
> Page
  > Section
    > Header
    > Checkbox
```

### /src/components

## Running the application

Ensure you have Ionic installed:
```bash
$ sudo npm install -g ionic cordova
$ ionic start myBlank blank
```
Serve the app in the browser:

```bash
$ ionic serve
```

Run on a device or simulator:

```bash
$ ionic cordova run ios
```

Substitute `ios` for `android` if you're not on Mac, or if you'd simply like to test within Android.
