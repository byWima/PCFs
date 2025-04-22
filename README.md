# Power Platform PCF

## Requirements

- Git
- Node.js
- Power Platform Cli
- Visual Studio Build

## How to build first time

1. Clone the repo
2. In the MenuButton folder run npm install and npm run build
3. Create a new folder on the same level as the MenuButton folder
4. In the new folder run the following command in a terminal -> pac solution init --publisher-name [Insert your Publsiher-name] --publisher-prefix [Insert your Publsiher-prefix]
5. Add a reference to the code folder with the following pac command -> pac solution add-reference --path ..\MenuButton\
6. Build the solution with the following command -> dotnet build -c release
7. The solution zip file can be found in the bin\release folder. Import it to your Power dev environment.
8. Publish all costumizations

## How to update the code and upload new solution
1. After you have made changes to the code remember to bump the version number in ControlManifest.Input.xml
2. Build the code with the following command -> npm run build
3. Bump the solutions version number in the solution.xml file
4. Build the project with the following command -> dotnet build -c release
5. The solution zip file can be found in the bin\release folder. Import it to your Power dev environment and ensure it says upgrade existing solution and the solution version number matches the number your entered in step 3
6. Publish all costumizations
