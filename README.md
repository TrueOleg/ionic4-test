# ionic4-test

## Getting Started
```
git clone https://github.com/TrueOleg/ionic4-test.git
```
### Prerequisites
```
ionic 4.0.0
```

```
Nodejs version 8.12.0
```

```
Gradle 4.10.2
```

```
Xcode Version 10.0 (10A255)
A free Apple ID or paid Apple Developer account
```
### Installing

```
npm install
```


## Deployment

To run the application on your iOS device:  
  1 Run command:
  ```
    ionic cordova build ios
  ```
  2 Open the .xcodeproj file in platforms/ios/ in Xcode  
  3 Change build system to legacy in Project settings  
  4 Connect your phone via USB and select it as the run target  
  5 In Xcode, in your project click on MyApp in TARGETS. Then click on General tab:  
  5.1 you can check "Automatically manage siging" in Signing section or  
  5.2 in Signing (Debug) section and in Signing (Release), select your Provisioning Profile in dropdown menu.  
  6 Click the Play button in Xcode to try to run your app  

If Xcode shows errors, below are the ways how to fix them:   
```
https://ionicframework.com/docs/intro/deploying/
```
```
https://stackoverflow.com/questions/52424462/xcode-10-a-valid-provisioning-profile-for-this-executable-was-not-found
```

## Issue description:
  We compare two plugins  
  - IOSFilePicker (https://beta.ionicframework.com/docs/native/file-picker)  
  - and cordova-plugin-mediapicker (https://github.com/an-rahulpandey/cordova-plugin-mediapicker).  
  Expected results:  
  - IOSFilePicker has to open iCloud drive (for example to pick a song) on iOS device (Iphone 6)  
  - cordova-plugin-mediapicker has to open Media Library and iCloud drive on iOS device (Iphone 6).  
  Actual results:  
  - IOSFilePicker opens iCloud (as expected!)  
  - cordova-plugin-mediapicker opens ONLY Media Library (doesnt open iCloud!).  
  Proof: https://media.giphy.com/media/1yMf4JxZ5qy7qne57B/giphy.gif  

  ![giphy](https://media.giphy.com/media/1yMf4JxZ5qy7qne57B/giphy.gif)