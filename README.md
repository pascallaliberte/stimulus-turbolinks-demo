# Stimulus + Turbolinks Demo

* [Stimulus][stimulus] (by [Basecamp][basecamp]) adds listeners on elements as they appear on the page.
* [Turbolinks][turbolinks] (also by Basecamp) loads the next page via pjax.

[stimulus]: https://github.com/stimulusjs/stimulus
[turbolinks]: https://github.com/turbolinks/turbolinks
[basecamp]: https://basecamp.com/

Both of these together make for a sweet combination to add touches of interaction to otherwise server-side rolled HTML. If you want to add more complex client-side interactions (if you must), then hook something up with Vue or something fancy (I've got [another demo for that here if interested][vuejs-demo]).

[vuejs-demo]: https://github.com/pascallaliberte/vue-turbolinks-demo

This demo app was made to show off the Stimulus-based controllers that get connected to and disconnected from elements as they're added or removed from the DOM, and to show off the snappiness you get between pages with Turbolinks.

Hope it's useful!

-- [Pascal Laliberté](http://pascallaliberte.me)