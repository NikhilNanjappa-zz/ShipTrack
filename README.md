# PoleStar

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1 using Bootstrap as the responsive framework.

## Build & development

- `node` and `npm` required as prerequisites. 
- Next we need to install `grunt`, `grunt-cli` using npm if not available.
- Clone or download the repo from Github.
- Enter the folder and run `npm install` and `bower install`
- Run `grunt serve` for preview.
- The app will launch serving `localhost:9000`

## Implementation

- The json data is loaded using get method of `$http` service.
- The items are iterated using the `ng-repeat`.
- The values of the severities in the datalist are **color-coded**, for example - All critical are shown in red, warning as yellow and safe as green.
- Angular `$filter` is used to filter the datalist by name and country check severity.
- The the two textbox the value of each can be typed to display the filtered results.
- Sorting is also done on the datalist by name, date of creation and date of modification.
- The sortings buttons are togglable, can be sorted(shown by blue) and unsorted back(shown as white) individually.
- The sorting buttons can be reverted to default by clicking the `Reset` button.
- For additional performance, efficient use of space and usability, **Pagination** is used on the data list displaying maximum 5 items in a page.
- The number of items per page can be changed from the `main.js`.
