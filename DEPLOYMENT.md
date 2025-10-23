# 🚀 Деплой на GitHub Pages

## Автоматический деплой (рекомендуется)

1. **Включите GitHub Pages в настройках репозитория:**
   - Перейдите в Settings → Pages
   - Source: "GitHub Actions"
   - Сохраните настройки

2. **Деплой произойдет автоматически** при каждом push в main ветку

## Ручной деплой

```bash
# Установить зависимости
npm install

# Собрать проект
npm run build

# Деплой на GitHub Pages
npm run deploy
```

## URL проекта

После деплоя сайт будет доступен по адресу:
**https://oreopaks123.github.io/lux-pro-hub/**

## Структура файлов

- `dist/` - собранные файлы для продакшена
- `.github/workflows/deploy.yml` - автоматический деплой
- `vite.config.ts` - настроен базовый путь `/lux-pro-hub/`

## Проверка деплоя

1. Перейдите в Actions вкладку репозитория
2. Убедитесь, что workflow "Deploy to GitHub Pages" выполнился успешно
3. Проверьте сайт по ссылке выше
