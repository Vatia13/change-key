# Change key

jQuery plugin to transform form field key to any symbol you want.

## This plugin is compatible and works with jQuery Chosen Select Plugin.


### This example transforms English keys to Georgian

```
<input type="text" name="title" class="geokey"/>
```

```
<script>
$('.geokey').changeKey();
</script>
```

### This example changes Hate to Love

```
<textarea name="message" class="love" placeholder="Type: Hate"></textarea>
```

```
<script>
$('.love').changeKey({
		lang:{
				h:'l',
				H:'L',
				a:'o',
				A:'O',
				t:'v',
				T:'V'
			}
});
</script>
```

#### example.html first look
![Alt text](https://raw.githubusercontent.com/Vatia13/change-key/master/1.png "First look in example.html")

#### example.html result
![Alt text](https://raw.githubusercontent.com/Vatia13/change-key/master/2.png "Result in example.html")

