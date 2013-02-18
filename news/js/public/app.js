/**
 * ownCloud News App - v0.0.1
 *
 * Copyright (c) 2013 - Bernhard Posselt <nukeawhale@gmail.com>
 *
 * This file is licensed under the Affero General Public License version 3 or later.
 * See the COPYING-README file
 *
 */

 /* Generated with Coffee-Script */

// Generated by CoffeeScript 1.4.0

/*

ownCloud - News

@author Bernhard Posselt
@copyright 2012 Bernhard Posselt nukeawhale@gmail.com

This library is free software; you can redistribute it and/or
modify it under the terms of the GNU AFFERO GENERAL PUBLIC LICENSE
License as published by the Free Software Foundation; either
version 3 of the License, or any later version.

This library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU AFFERO GENERAL PUBLIC LICENSE for more details.

You should have received a copy of the GNU Affero General Public
License along with this library.  If not, see <http://www.gnu.org/licenses/>.
*/


(function() {

  angular.module('News', ['OC', 'ui']).config(function($provide) {
    var config;
    return $provide.value('Config', config = {
      markReadTimeout: 500,
      scrollTimeout: 500,
      feedUpdateInterval: 6000000,
      itemBatchSize: 20
    });
  });

  angular.module('News').run([
    'Persistence', function(Persistence) {
      return Persistence.init();
    }
  ]);

  $(document).ready(function() {
    return $(this).keyup(function(e) {
      if ((e.which === 116) || (e.which === 82 && e.ctrlKey)) {
        document.location.reload(true);
        return false;
      }
    });
  });

}).call(this);

// Generated by CoffeeScript 1.4.0

/*

ownCloud - News

@author Bernhard Posselt
@copyright 2012 Bernhard Posselt nukeawhale@gmail.com

This library is free software; you can redistribute it and/or
modify it under the terms of the GNU AFFERO GENERAL PUBLIC LICENSE
License as published by the Free Software Foundation; either
version 3 of the License, or any later version.

This library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU AFFERO GENERAL PUBLIC LICENSE for more details.

You should have received a copy of the GNU Affero General Public
License along with this library.  If not, see <http://www.gnu.org/licenses/>.
*/


(function() {

  angular.module('News').factory('_ActiveFeed', function() {
    var ActiveFeed;
    ActiveFeed = (function() {

      function ActiveFeed() {
        /*
        			Default value is all feeds
        */
        this._id = 0;
        this._type = 3;
      }

      ActiveFeed.prototype.handle = function(data) {
        this._id = data.id;
        return this._type = data.type;
      };

      ActiveFeed.prototype.getType = function() {
        return this._type;
      };

      ActiveFeed.prototype.getId = function() {
        return this._id;
      };

      return ActiveFeed;

    })();
    return ActiveFeed;
  });

}).call(this);

// Generated by CoffeeScript 1.4.0

/*

ownCloud - News

@author Bernhard Posselt
@copyright 2012 Bernhard Posselt nukeawhale@gmail.com

This library is free software; you can redistribute it and/or
modify it under the terms of the GNU AFFERO GENERAL PUBLIC LICENSE
License as published by the Free Software Foundation; either
version 3 of the License, or any later version.

This library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU AFFERO GENERAL PUBLIC LICENSE for more details.

You should have received a copy of the GNU Affero General Public
License along with this library.  If not, see <http://www.gnu.org/licenses/>.
*/


(function() {

  angular.module('News').factory('FeedType', function() {
    var feedType;
    return feedType = {
      Feed: 0,
      Folder: 1,
      Starred: 2,
      Subscriptions: 3,
      Shared: 4
    };
  });

}).call(this);

// Generated by CoffeeScript 1.4.0

/*

ownCloud - News

@author Bernhard Posselt
@copyright 2012 Bernhard Posselt nukeawhale@gmail.com

This library is free software; you can redistribute it and/or
modify it under the terms of the GNU AFFERO GENERAL PUBLIC LICENSE
License as published by the Free Software Foundation; either
version 3 of the License, or any later version.

This library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU AFFERO GENERAL PUBLIC LICENSE for more details.

You should have received a copy of the GNU Affero General Public
License along with this library.  If not, see <http://www.gnu.org/licenses/>.
*/


(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  angular.module('News').factory('_FeedModel', [
    '_Model', function(_Model) {
      var FeedModel;
      FeedModel = (function(_super) {

        __extends(FeedModel, _super);

        function FeedModel(_utils) {
          this._utils = _utils;
          FeedModel.__super__.constructor.call(this);
        }

        FeedModel.prototype.add = function(item) {
          if (item.icon === 'url()') {
            item.icon = 'url(' + this._utils.imagePath('news', 'rss.svg') + ')';
          }
          return FeedModel.__super__.add.call(this, item);
        };

        return FeedModel;

      })(_Model);
      return FeedModel;
    }
  ]);

}).call(this);

// Generated by CoffeeScript 1.4.0

/*

ownCloud - News

@author Bernhard Posselt
@copyright 2012 Bernhard Posselt nukeawhale@gmail.com

This library is free software; you can redistribute it and/or
modify it under the terms of the GNU AFFERO GENERAL PUBLIC LICENSE
License as published by the Free Software Foundation; either
version 3 of the License, or any later version.

This library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU AFFERO GENERAL PUBLIC LICENSE for more details.

You should have received a copy of the GNU Affero General Public
License along with this library.  If not, see <http://www.gnu.org/licenses/>.
*/


(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  angular.module('News').factory('_FolderModel', [
    '_Model', function(_Model) {
      var FolderModel;
      FolderModel = (function(_super) {

        __extends(FolderModel, _super);

        function FolderModel() {
          return FolderModel.__super__.constructor.apply(this, arguments);
        }

        return FolderModel;

      })(_Model);
      return FolderModel;
    }
  ]);

}).call(this);

// Generated by CoffeeScript 1.4.0

/*

ownCloud - News

@author Bernhard Posselt
@copyright 2012 Bernhard Posselt nukeawhale@gmail.com

This library is free software; you can redistribute it and/or
modify it under the terms of the GNU AFFERO GENERAL PUBLIC LICENSE
License as published by the Free Software Foundation; either
version 3 of the License, or any later version.

This library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU AFFERO GENERAL PUBLIC LICENSE for more details.

You should have received a copy of the GNU Affero General Public
License along with this library.  If not, see <http://www.gnu.org/licenses/>.
*/


(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  angular.module('News').factory('_ItemModel', [
    '_Model', function(_Model) {
      var ItemModel;
      ItemModel = (function(_super) {

        __extends(ItemModel, _super);

        function ItemModel() {
          return ItemModel.__super__.constructor.apply(this, arguments);
        }

        return ItemModel;

      })(_Model);
      return ItemModel;
    }
  ]);

}).call(this);

// Generated by CoffeeScript 1.4.0

/*

ownCloud - News

@author Bernhard Posselt
@copyright 2012 Bernhard Posselt nukeawhale@gmail.com

This library is free software; you can redistribute it and/or
modify it under the terms of the GNU AFFERO GENERAL PUBLIC LICENSE
License as published by the Free Software Foundation; either
version 3 of the License, or any later version.

This library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU AFFERO GENERAL PUBLIC LICENSE for more details.

You should have received a copy of the GNU Affero General Public
License along with this library.  If not, see <http://www.gnu.org/licenses/>.
*/


(function() {

  angular.module('News').factory('_OPMLParser', function() {
    var Feed, Folder, OPMLParser;
    Feed = (function() {

      function Feed(_name, _url) {
        this._name = _name;
        this._url = _url;
      }

      Feed.prototype.getName = function() {
        return this._name;
      };

      Feed.prototype.getUrl = function() {
        return this._url;
      };

      Feed.prototype.isFolder = function() {
        return false;
      };

      return Feed;

    })();
    Folder = (function() {

      function Folder(_name) {
        this._name = _name;
        this._items = [];
      }

      Folder.prototype.add = function(feed) {
        return this._items.push(feed);
      };

      Folder.prototype.getItems = function() {
        return this._items;
      };

      Folder.prototype.getName = function() {
        return this._name;
      };

      Folder.prototype.isFolder = function() {
        return true;
      };

      return Folder;

    })();
    OPMLParser = (function() {

      function OPMLParser() {}

      OPMLParser.prototype.parseXML = function(xml) {
        var $root, $xml, structure;
        $xml = $($.parseXML(xml));
        $root = $xml.find('body');
        structure = new Folder('root');
        this._recursivelyParse($root, structure);
        return structure;
      };

      OPMLParser.prototype._recursivelyParse = function($xml, structure) {
        var $outline, feed, folder, outline, _i, _len, _ref, _results;
        _ref = $xml.children('outline');
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          outline = _ref[_i];
          $outline = $(outline);
          if (angular.isDefined($outline.attr('type'))) {
            feed = new Feed($outline.attr('text'), $outline.attr('xmlUrl'));
            _results.push(structure.add(feed));
          } else {
            folder = new Folder($outline.attr('text'));
            structure.add(folder);
            _results.push(this._recursivelyParse($outline, folder));
          }
        }
        return _results;
      };

      return OPMLParser;

    })();
    return OPMLParser;
  });

}).call(this);

// Generated by CoffeeScript 1.4.0

/*

ownCloud - News

@author Bernhard Posselt
@copyright 2012 Bernhard Posselt nukeawhale@gmail.com

This library is free software; you can redistribute it and/or
modify it under the terms of the GNU AFFERO GENERAL PUBLIC LICENSE
License as published by the Free Software Foundation; either
version 3 of the License, or any later version.

This library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU AFFERO GENERAL PUBLIC LICENSE for more details.

You should have received a copy of the GNU Affero General Public
License along with this library.  If not, see <http://www.gnu.org/licenses/>.
*/


(function() {

  angular.module('News').factory('_Persistence', [
    '_Request', function(_Request) {
      var Persistence;
      Persistence = (function() {

        function Persistence(_request, _loading, _config, _$rootScope, _activeFeed) {
          this._request = _request;
          this._loading = _loading;
          this._config = _config;
          this._$rootScope = _$rootScope;
          this._activeFeed = _activeFeed;
        }

        Persistence.prototype.init = function() {
          /*
          			Loads the initial data from the server
          */

          var loadFeeds,
            _this = this;
          this._initReqCount = 0;
          this._loading.increase();
          ({
            loadItems: function() {
              var data;
              if (_this._initReqCount >= 2) {
                data = {
                  limit: _this._config.itemBatchSize,
                  offset: 0,
                  type: _this._activeFeed.getType(),
                  id: _this._activeFeed.getId()
                };
                return _this._request.get('news_items', {}, data, function() {
                  return _this._loading.decrease();
                });
              } else {
                _this._$rootScope.$broadcast('triggerHideRead');
                return _this._initReqCount += 1;
              }
            }
          });
          loadFeeds = function() {
            _this._request.get('news_feeds_active', loadItems);
            return _this._request.get('news_feeds', {}, {}, loadItems);
          };
          this._request.get('news_settings_read');
          this._request.get('news_items_starred');
          return this._request.get('news_folders', {}, {}, loadFeeds);
        };

        return Persistence;

      })();
      return Persistence;
    }
  ]);

}).call(this);

// Generated by CoffeeScript 1.4.0

/*

ownCloud - News

@author Bernhard Posselt
@copyright 2012 Bernhard Posselt nukeawhale@gmail.com

This library is free software; you can redistribute it and/or
modify it under the terms of the GNU AFFERO GENERAL PUBLIC LICENSE
License as published by the Free Software Foundation; either
version 3 of the License, or any later version.

This library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU AFFERO GENERAL PUBLIC LICENSE for more details.

You should have received a copy of the GNU Affero General Public
License along with this library.  If not, see <http://www.gnu.org/licenses/>.
*/


(function() {

  angular.module('News').factory('Persistence', [
    '_Persistence', 'Request', 'Loading', 'Config', '$rootScope', 'ActiveFeed', function(_Persistence, Request, Loading, Config, $rootScope, ActiveFeed) {
      return new _Persistence(Request, Loading, Config, $rootScope, ActiveFeed);
    }
  ]);

  angular.module('News').factory('Request', [
    '$http', 'Publisher', 'Router', function($http, Publisher, Router) {
      return new Request($http, Publisher, Router);
    }
  ]);

  angular.module('News').factory('ActiveFeed', [
    '_ActiveFeed', function(_ActiveFeed) {
      return new _ActiveFeed();
    }
  ]);

  angular.module('News').factory('ShowAll', [
    '_ShowAll', function(_ShowAll) {
      return new _ShowAll();
    }
  ]);

  angular.module('News').factory('StarredCount', [
    '_StarredCount', function(_StarredCount) {
      return new _StarredCount();
    }
  ]);

  angular.module('News').factory('ItemModel', [
    '_ItemModel', function(_ItemModel) {
      return new _ItemModel();
    }
  ]);

  angular.module('News').factory('FolderModel', [
    '_FolderModel', function(_FolderModel) {
      return new _FolderModel();
    }
  ]);

  angular.module('News').factory('ItemModel', [
    '_ItemModel', function(_ItemModel) {
      return new _ItemModel();
    }
  ]);

  angular.module('News').factory('Publisher', [
    '_Publisher', 'ActiveFeed', 'ShowAll', 'StarredCount', 'ItemModel', 'FolderModel', 'FeedModel', function(_Publisher, ActiveFeed, ShowAll, StarredCount, ItemModel, FolderModel, FeedModel) {
      var publisher;
      publisher = new _Publisher();
      Publisher.subsribeModelTo(ActiveFeed, 'activeFeed');
      Publisher.subsribeModelTo(ShowAll, 'showAll');
      Publisher.subsribeModelTo(StarredCount, 'starred');
      Publisher.subsribeModelTo(FolderModel, 'folders');
      Publisher.subsribeModelTo(FeedModel, 'feeds');
      Publisher.subsribeModelTo(ItemModel, 'items');
      return publisher;
    }
  ]);

  angular.module('News').factory('OPMLParser', [
    '_OPMLParser', function(_OPMLParser) {
      return new _OPMLParser();
    }
  ]);

}).call(this);

// Generated by CoffeeScript 1.4.0

/*

ownCloud - News

@author Bernhard Posselt
@copyright 2012 Bernhard Posselt nukeawhale@gmail.com

This library is free software; you can redistribute it and/or
modify it under the terms of the GNU AFFERO GENERAL PUBLIC LICENSE
License as published by the Free Software Foundation; either
version 3 of the License, or any later version.

This library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU AFFERO GENERAL PUBLIC LICENSE for more details.

You should have received a copy of the GNU Affero General Public
License along with this library.  If not, see <http://www.gnu.org/licenses/>.
*/


(function() {

  angular.module('News').factory('_ShowAll', function() {
    var ShowAll;
    ShowAll = (function() {

      function ShowAll() {
        this._showAll = false;
      }

      ShowAll.prototype.handle = function(data) {
        return this._showAll = data;
      };

      ShowAll.prototype.getShowAll = function() {
        return this._showAll;
      };

      return ShowAll;

    })();
    return ShowAll;
  });

}).call(this);

// Generated by CoffeeScript 1.4.0

/*

ownCloud - News

@author Bernhard Posselt
@copyright 2012 Bernhard Posselt nukeawhale@gmail.com

This library is free software; you can redistribute it and/or
modify it under the terms of the GNU AFFERO GENERAL PUBLIC LICENSE
License as published by the Free Software Foundation; either
version 3 of the License, or any later version.

This library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU AFFERO GENERAL PUBLIC LICENSE for more details.

You should have received a copy of the GNU Affero General Public
License along with this library.  If not, see <http://www.gnu.org/licenses/>.
*/


(function() {

  angular.module('News').factory('_StarredCount', function() {
    var StarredCount;
    StarredCount = (function() {

      function StarredCount() {
        this._count = 0;
      }

      StarredCount.prototype.handle = function(data) {
        return this._count = data;
      };

      StarredCount.prototype.getStarredCount = function() {
        return this._count;
      };

      return StarredCount;

    })();
    return StarredCount;
  });

}).call(this);
