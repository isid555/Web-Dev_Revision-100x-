S3 - Simple Storage Service (S3)
in AWS for storing Objects -images,etc...

Content delivery network - 
the object stores the images on the server and the server is located in the US east.
the CDN has multiple pops/edge locations around the world.
When a user requests an image, the CDN will check if the image is in the pop location.(nearest to the the user ,not US)
if the object is not in the pop location, the CDN will fetch the object from the server in the US east and cache it in the pop location.so that it will be availble in that pop locaction

# TS API's

Pick allows you to create a new type by selecting a set of properties (Keys) from an existing type (Type).
Imagine you have a User model with several properties, but for a user profile display, you only need a subset of these properties.

Partial makes all properties of a type optional, creating a type with the same properties, but each marked as optional.

When you have a configuration object that should not be altered after initialization, making it Readonly ensures its properties cannot be changed.

Exclude
In a function that can accept several types of inputs but you want to exclude specific types from being passed to it.
