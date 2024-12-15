The solution involves correctly implementing the `keyExtractor` prop within the FlatList component.  The `keyExtractor` function should take an item from the data array and return a unique ID for that item.  This ID should be consistent for that item across renders.

Here's the corrected code:

```javascript
<FlatList
  data={[{id:1, text: 'Item 1'}, {id:2, text: 'Item 2'}, {id:3, text: 'Item 3'}]}
  keyExtractor={(item) => item.id.toString()}
  renderItem={({item}) => <Text>{item.text}</Text>}
/>
```

This corrected version uses the `id` property of each item as the unique key.  Ensure that your data source always provides a unique `id` for each item. If the id's are not unique then you will have a problem.  If no appropriate id exists, consider generating unique keys using a library like `uuid`.