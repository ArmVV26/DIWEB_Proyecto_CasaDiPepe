for %%F in (*) do (    
    for %%S in (480 768 1200 1920 2560 3200) do (
        magick "%%F" -resize %%Sx "%%~nF-%%Spx%%~xF"
        echo Imagen redimensionada: %%~nF-%%Spx%%~xF
    )
)