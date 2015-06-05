import Ember from 'ember';

var TreeNodeView = Ember.View.extend({
  opened: false,
  branch: function () {
    return this.get('content').branch;
  }.property(),
  subBranch: undefined,
  fetchedData: false,
  tagName: 'li',
  // Ember had some issues with finding the treenode template when the branch view is dynamically added to
  // the parent collection view in the click event. Had to compile the template here instead
  template: Ember.Handlebars.compile('{{view.content.name}} {{view.content.age}}'),
  click: function (evt) {
    if (this.get('opened')) {
      // user wants to close the branch
      var index = this.get('parentView').indexOf(this) + 1;
      this.get('parentView').removeAt(index);
      this.set('opened', false);
    }
    else if (this.get('fetchedData')) {
      // user wants to open the branch and we have already created the view before
      var index = this.get('parentView').indexOf(this) + 1;
      this.get('parentView').insertAt(index, this.get('subBranch'));
      this.set('opened', true);
    }
    else if (this.get('branch')) {
      // user wants to open the branch for the first time
      var name, age;
      var me = this;
      name = this.get('content').name;
      age = this.get('content').age;
      var treeBranchView = ItemList.create();
      treeBranchView.set('content', [{ 'name': 'John', 'age': 10, 'branch': true }, {
        'name': 'Tom',
        'age': 5,
        'branch': false
      }, { 'name': 'Paul', 'age': 7, 'branch': true }]);
      var index = me.get('parentView').indexOf(me) + 1;
      me.get('parentView').insertAt(index, treeBranchView);
      me.set('opened', true);
      me.set('subBranch', treeBranchView);
      me.set('fetchedData', true);
    }
  }
});

var ItemList = Ember.CollectionView.extend({
  tagName: 'ul',
  classNames: ['a-collection'],
  content: [
    {
      'name': 'Paul', 'age': 10, 'branch': true
    },
    {
      'name': 'Tom', 'age': 5, 'branch': false
    },
    { 'name': 'Paul', 'age': 7, 'branch': false }
  ],
  itemViewClass: TreeNodeView
});

export default ItemList;
